import sys 
import json 

salary = int(sys.argv[1])
province = sys.argv[2]
result = 0
if province == "Québec":
	result = min(round(salary * 0.0118, 0), 664.34)
else:
	result = min(round(salary * 0.0158, 0), 889.54)

# this is what you want to send data to Nodejs 
print(result) 
sys.stdout.flush() 