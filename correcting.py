import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df=pd.read_csv('train.csv')

graph=sns.FacetGrid(df,col='Survived')
graph.map(plt.hist,'Fare',bins=20)
#plt.show()

df.loc[df['Fare']>400,'Fare']=df['Fare'].median()
plt.show()