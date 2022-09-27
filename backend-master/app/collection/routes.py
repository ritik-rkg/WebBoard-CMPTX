import json
from flask_cors import cross_origin
from flask import Blueprint, jsonify, Response, request

from app import db

collection = Blueprint('collection', __name__)

# @collection.route('/create', methods=['POST'])
# def create_collection():
#     try:
#         '''
#         data = {
#             "name": "name",
#             "discription": "discription"
#         }
#         '''
#         data = request.json
#         # if data:
#         #     return user_sign_up(data)
#     except Exception as e:
#         return Response(
#             mimetype="application/json",
#             response=json.dumps({'error': str(e)}),
#             status=400
#         )