import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df=pd.read_csv('train.csv')
df.sample()

sr=pd.crosstab(df['Sex'],df['Survived'])
print(sr)

ax=sns.countplot(x='Sex',hue='Survived',palette='Set1',data=df)
ax.set(title='Survivors',xlabel='Sex',ylabel='Numbers')
plt.show()

fp=sns.factorplot(x='Pclass',y='Survived',hue='Sex',data=df,aspect=0.9,size=3)
plt.show()