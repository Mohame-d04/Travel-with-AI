
import pandas as pd 
import numpy as np
from sklearn.model_selection import train_test_split  
import tensorflow as tf


# Load CSV file
data = pd.read_csv('c:/Users/MSI/Desktop/Projet/Datafiniti_Hotel_Reviews_Jun19.csv')

data.shape
a=list(data.columns)
b=[]
for i in a:
    c=data[i].isnull().sum()
    b.append(c)
null_data=pd.DataFrame({'hot':a,'NO':b}) 
null_data

# Assume 'name' is the column we want to predict and the rest are features
X = data.drop(columns=['name'])
y = data['name']
# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = tf.keras.Sequential([
    tf.keras.layers.Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(1)
])

# Compile the model
model.compile(optimizer='adam', loss='mse', metrics=['mae'])







