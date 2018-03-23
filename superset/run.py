from superset import app

import os

# os.system("superset db migrate")
# os.system("superset load_examples")

app.run(debug=True, port=8000)
