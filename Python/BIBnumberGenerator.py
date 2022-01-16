# 接力赛生成参赛号码
teamCount = 34
memberCount = 6
for teamNum in range(1,teamCount+1):
	for memberNum in range(1,memberCount+1):
		teamPrefix = '' if teamNum >= 10 else '0'
		print(teamPrefix + str(teamNum) + '0' + str(memberNum))
