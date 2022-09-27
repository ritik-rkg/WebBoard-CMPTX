from flask import jsonify, Response, make_response, g
import json

from app import db, ts
from app.user.model import User
from app.user.auth import Auth

def user_sign_up(data):
    try:        
        if User.username_exists(data["username"]):
            return Response(
                mimetype="application/json",
                response=json.dumps({'error': "Username already exists"}),
                status=403
            )
        if User.email_exists(data["email"]):
            return Response(
                mimetype="application/json",
                response=json.dumps({'error': "email already exists"}),
                status=403
            )
        password_hash = User.generate_hash_password(data["password"])
        new_user = User(
            username=data["username"],
            name=data["name"],
            email=data["email"],
            password=password_hash
        )
        
        new_user.save()
        return Response(
                mimetype="application/json",
                response=json.dumps({'success': 'User created Successfully'}),
                status=201
            )
        # # Now we'll send the email confirmation link
        # subject = "Confirm your email"

        # token = ts.dumps(self.email, salt='email-confirm-key')

        # confirm_url = url_for(
        #     'confirm_email',
        #     token=token,
        #     _external=True)

        # html = render_template(
        #     'email/activate.html',
        #     confirm_url=confirm_url)

        # # We'll assume that send_email has been defined in myapp/util.py
        # send_email(user.email, subject, html)
    except Exception as e:
        return Response(
            mimetype="application/json",
            response=json.dumps({'error': str(e)}),
            status=400
        )

def user_sign_in(data):
    try:
        user = User.query.filter_by(email=data["email"]).first()
        password_verified = user.check_hash_password(data["password"])
        if password_verified:
            data = {
                "sucess": "signed in successflly"
            }
            res = make_response(json.dumps(data))
            token = Auth.generate_token(user.id)
            res.set_cookie(key="session", value=token, max_age=None, samesite='Strict', secure=True )
            return  res, 200, {'Content-Type': 'application/json'}# ask arvind what all data does he require after sign_in
            # return res
        else:
            return Response(
                mimetype="application/json",
                response=json.dumps({'error': 'There was an error with your e-mail/password combination'}),
                status=403
            ) 
    except Exception as e:
        return Response(
            mimetype="application/json",
            response=json.dumps({'error': str(e)}),
            status=400
        )

def user_email_verification(token):
    try:
        email = ts.loads(token, salt="email-confirm-key", max_age=86400)
        user = User.query.filter_by(email=email).first()
        if user:
            user.email_verified = True
            db.session.commit()
            return # ask arvind what all data does he require after verification
        else:
            return Response(
                mimetype="application/json",
                response=json.dumps({'error': 'User not found'}),
                status=404
            )
    except Exception as e:
        return Response(
            mimetype="application/json",
            response=json.dumps({'error': str(e)}),
            status=400
        )

@Auth.auth_required
def get_user_details():
    user_id=g.user['id']
    try:
        user = User.query.get(user_id)
        data = {
            "username": user.username,
            "name": user.name,
            "email": user.email,
            "premium": user.premium,
            "sign_in_count": user.sign_in_count,
            "created_on": user.get_created_on()
        }
        return Response(
            mimetype="application/json",
            response=json.dumps(data),
            status=200
        )
    except Exception as e:
        return Response(
            mimetype="application/json",
            response=json.dumps({'error': str(e)}),
            status=400
        )

def update_user_details(data):
    pass
