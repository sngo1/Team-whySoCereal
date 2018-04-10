# Team whySoCereal
# Samantha Ngo, Adam Abbas, Holden Higgins, Jawadul Kadir
# Softdev - pd7
# April 2018

from flask import Flask, render_template, redirect, url_for
# from utils import

app = Flask(__name__)

@app.route('/')
def displayMain():
    # Display main webpage
    return render_template('main.html')

if __name__ == "__main__":
    app.debug = True
    app.run()
