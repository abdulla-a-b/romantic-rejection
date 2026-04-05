import pandas as pd
from sklearn.decomposition import PCA
from sklearn.cluster import KMeans

# load data
data = pd.read_csv("responses.csv")

# Q factor analysis
pca = PCA(n_components=3)
factors = pca.fit_transform(data)

print("Q Factors:")
print(factors)

# cluster participants
kmeans = KMeans(n_clusters=3)
clusters = kmeans.fit_predict(data)

print("Participant Groups:")
print(clusters)
