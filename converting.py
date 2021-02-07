import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df=pd.read_csv('train.csv')

df['Name'].sample(10)

def title(name):
    if '.' in name:
        return name.split(',')[1].split('.')[0].strip()

    else:
        return 'No title exists'

unique_titles=set([x for x in df['Name'].map(lambda x:title(x))])
print(unique_titles)

def compact_titles(x):
    title_new=x['Title']
    if title_new in ['Capt','Col','Major']:
        return 'Officer'
    elif title_new in ['Sir','Ms','Jonkheer','Dona','the Countess','Lady','Don']:
        return 'Royal people'
    elif title_new in ['Mme']:
        return 'Mrs'
    elif title_new in ['Mlle','Ms']:
        return 'Miss'
    else:
        return title_new

df['Title']=df['Name'].map(lambda x:title(x))
df['Title']=df.apply(compact_titles,axis=1)
#print(df.Title.value_counts())

df.drop('Name',axis=1,inplace=True)
df.drop('Ticket',axis=1,inplace=True)
df.Sex.replace(('male','female'),(0,1),inplace=True)
df.Embarked.replace(('S','Q','C'),(0,1,2),inplace=True)
df.Title.replace(('Mrs', 'Jonkheer', 'Master', 'Col', 'Dr', 'Ms', 'Lady', 'Don', 'Capt', 'Mme', 'theCountess', 'Major', 'Miss', 'Sir', 'Mr', 'Rev', 'Mlle'),(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16),inplace=True)
print(df.sample(10))