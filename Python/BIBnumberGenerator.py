# 接力赛生成参赛号码
for first in range(1,34+1):
	for second in range(1,6+1):
		teamPrefix = '' if first >= 10 else '0'
		print(teamPrefix + str(first) + '0' + str(second))