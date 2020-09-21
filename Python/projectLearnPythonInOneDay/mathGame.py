import myPythonFunctions as m 

userName = input('Your name: ')
userScore = int(m.getUserPoint(userName))

if userScore == -1:
		newUser = True
		userScore = 0
else:
		newUser = False
		
userChoice = 0
while userChoice != '-1':
		userScore +=  m.generateQuestion()
		print('Score: ', userScore)
		userChoice = input('############################################ -1 to exit')

m.updateUserPoints(newUser, userName, str(userScore))


