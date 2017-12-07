#! /usr/bin/python3
import os
import random
import string

# generates a new key and either saves it to a file or an env variable
SECRET_FILE = open(os.path.join('./', 'secretkey'), "w")
secret = ''.join([random.SystemRandom().choice("{}{}{}".format(string.ascii_letters, string.digits, string.punctuation)) for i in range(50)])
print(secret)
SECRET_FILE.write(secret)
SECRET_FILE.close()
