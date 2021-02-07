import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df=pd.read_csv('train.csv')

#Uncleaned Data
for column in df:
    print(column,'::' ,df[column].isnull().sum())

df['Age'].fillna(df['Age'].median(),inplace=True)



#df['Embarked'].value_counts()
df['Embarked'].fillna('S',inplace=True)


del df['Cabin']

print('*'*50)
#Cleaned Data
for column in df:
    print(column,'::' ,df[column].isnull().sum())