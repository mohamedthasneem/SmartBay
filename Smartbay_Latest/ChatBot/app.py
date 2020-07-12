from chatbot import chatbot
from flask import Flask, render_template, request,jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
import pymongo
from pymongo import MongoClient
from sklearn.metrics.pairwise import cosine_similarity
from flask import json

app = Flask(__name__)
CORS(app)
app.static_folder = 'static'

@app.route("/chat", methods=['POST'])
#@cross_origin(origin='localhost',headers=['Content- Type'])
def chatBot():
    msg = request.json['message']
    rply = str(chatbot.get_response(msg))
    response = app.response_class(
        response=json.dumps(rply),
        status=200,
        mimetype='application/json'
    )
    return response

@app.route('/test',methods=['POST'])
def getDataFrame():

    data = request.json['idList']
    print(data)

    connection = pymongo.MongoClient('localhost',27017)
    database = connection['smartbay_db']
    ratings_collection = database['ratings']
    products_collection = database['products']

    ratings_data = pd.DataFrame(list(ratings_collection.find()))
    products_data = pd.DataFrame(list(products_collection.find()))

    ratings = ratings_data.drop(['_id','_class'],axis=1)
    ratings.head()

    products = products_data.drop(['_id','_class'],axis=1)
    products.head()

    product_ratings = pd.merge(products, ratings)
    product_ratings.head(15)

    ratings_matrix = ratings.pivot_table(index=['productId'],columns=['email'],values='rating').reset_index(drop=True)
    ratings_matrix.fillna( 0, inplace = True )
    ratings_matrix.head(15)

    product_similarity=cosine_similarity(ratings_matrix)
    np.fill_diagonal( product_similarity, 0 )
    product_similarity

    ratings_matrix = pd.DataFrame( product_similarity )
    ratings_matrix.head(15)

    try:
    #user_inp=input('Enter the reference movie title based on which recommendations are to be made: ')

        user_inp= data


        print(user_inp)
        x = []
        y = 0

        for i in range(len(user_inp)):
            inp=products[products['productId']==user_inp[i]].index.tolist()
            inp=inp[0]

            products['similarity'] = ratings_matrix.iloc[inp]
            products.head(5)

            recPr = products.sort_values( ["similarity"], ascending = False )[1:2]
            recPr['productId'] = recPr['productId'].astype(str).astype(float)
            y = recPr.iat[0,0]
            x.append(y)
            print(x)
            print(y)
        #print("Recommended movies based on your choice of ",user_inp[i] ,": \n", products.sort_values( ["similarity"], ascending = False )[1:2])
        #print(product['productId'])
    except:
        print("Sorry, the movie is not in the database!")

    return jsonify({'ids': x})


if __name__ == "__main__":
    app.run()
