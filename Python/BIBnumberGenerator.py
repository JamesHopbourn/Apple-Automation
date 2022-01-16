# 接力赛生成参赛号码
for teamNum in range(1,34+1):
	for memberNum in range(1,6+1):
		teamPrefix = '' if teamNum >= 10 else '0'
		print(teamPrefix + str(teamNum) + '0' + str(memberNum))
