from flask import Flask, send_file, request, render_template
#from flask_cors import CORS, cross_origin
import os

app = Flask(__name__)
#cors = CORS(app, support_credentials=True)
app.config['SECRET_KEY'] = '123'
#app.config['CORS_HEADERS'] = 'Content-Type'


@app.after_request
def creds(response):
    response.headers['Access-Control-Allow-Origin'] = 'http://webboard.iiitb.ac.in'
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'
    return response

@app.route("/", methods=["GET"])
def home():
    return "The website is working"

@app.route('/convert', methods=["GET"])
#@cross_origin(supports_credentials=True)
def convert():
    form = request.form
    file_to_convert = request.files.get('file')
    print (file_to_convert.filename)
    file_to_convert.save('/home/administrator/'+form["filename"])
    print ("=-"*80)
    print (file_to_convert.filename)
    os.system('unoconv -f pdf '+'/home/administrator/'+str(form["filename"]))
    print ("=-"*80)
    file_name_extention = form["filename"].split('.')
    #return render_template('download.html', file='/var/www/pdf_api'+str(form["filename"])[0]+'.pdf')
    os.system('rm /home/administrator/'+str(form["filename"]))
    return send_file('/home/administrator/'+file_name_extention[0]+".pdf", attachment_filename=file_name_extention[0]+".pdf")

if __name__ == '__main__':
  app.run(debug=True, host="0.0.0.0")
