import numpy
import pandas as pd
import sklearn
import matplotlib
pd.set_option('display.max_columns',None)
pd.set_option('display.max_rows',None)

df=pd.read_csv('train.csv')
print(df)
print(df.size)
print(df.describe())
print(df.info())
print(df.sample())
print(df.columns)
print(df['Name'])
print(df['Age'])

