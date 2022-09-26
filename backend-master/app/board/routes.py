from flask import Blueprint, jsonify, Response, request, render_template
from flask_cors import cross_origin
import json

from app import db


board = Blueprint('board', __name__)

@board.route('/', methods=["GET", "POST"])
@cross_origin(supports_credentials=True)
def user_details():
    try:
        print ("=-"*80)
        print ("request.cookies",request.cookies)
        print("=-"*80)
        if(request.method == 'POST'):
            data = request.json
            if data:
                print(data)
            else:
                return Response(
                    mimetype="application/json",
                    response=json.dumps({'error': "No Json object recieved"}),
                    status=400
                )
        if(request.method == 'GET'):
            return render_template("index.html")

    except Exception as e:
        return Response(
            mimetype="application/json",
            response=json.dumps({'error': str(e)}),
            status=400
        )


