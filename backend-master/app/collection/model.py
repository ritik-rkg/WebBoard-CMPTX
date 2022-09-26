from datetime import datetime

from app import db, bcrypt

class Collection(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    user_id = db.Column(db.Integer, nullable=False)
    discription = db.Column(db.String)

    created_on = db.Column(db.DateTime, default=datetime.utcnow)
    updated_on = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return 'id: {}, name: {}, user_id: {}, created_on: {}'.format(self.id, self.name, \
             self.user_id, self.get_created_on())

    def get_created_on(self):
        return self.created_on.strftime("%c")
    
    def get_updated_on(self):
        return self.updated_on.strftime("%c")

    def save(self):
        db.session.add(self)
        try:
            db.session.commit()
        except:
            db.session.rollback()
        return