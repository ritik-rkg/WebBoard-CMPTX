from flask import jsonify, Response, make_response, g
import json

from app import db, ts
from app.user.auth import Auth
from app.user.model import User
from app.collection.model import Collection


@Auth.auth_required
def create_new_collection(data):
    user_id=g.user['id']
    try:    
        user = User.query.get(user_id)
        if(not user):
            return Response(
                mimetype="application/json",
                response=json.dumps({'error': "User does not exists"}),
                status=403
            )
        new_collection = Collection(
            user_id=user_id,
            name=data['name'],
            description=data['description']
        )
        new_collection.save()
        return Response(
            mimetype="application/json",
            response=json.dumps({'success': "Collection created successfully"}),
            status=201
        )
    except Exception as e:
        return Response(
            mimetype="application/json",
            response=json.dumps({'error': str(e)}),
            status=400
        )