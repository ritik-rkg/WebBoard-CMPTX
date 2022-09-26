import json
from flask_cors import cross_origin
from flask import Blueprint, jsonify, Response, request

from app import db
# ! not implemented
collection = Blueprint('collection', __name__)
@collection.route('/create', methods=['POST'])
def create_collection():
    try:
        '''
        data = {
            "name": "name",
            "discription": "discription"
        }
        '''
        data = request.json
        print(data)
        return Response(
            mimetype="application/json",
            response=json.dumps({'success': "Data got through - made by Rohit"}),
            status=201
        )
        # if data:
        #     return user_sign_up(data)
    except Exception as e:
        return Response(
            mimetype="application/json",
            response=json.dumps({'error': str(e)}),
            status=400
        )