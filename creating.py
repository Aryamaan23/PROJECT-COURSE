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
print(df.Title.value_counts())
