import sys
from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont

file = str(sys.argv[1])
group = str(sys.argv[2])
ranks = open(file, 'r')
content = ranks.readlines()
for text in content:
	text = text.split('\t')
	print('正在生成' + text[1] + '的成绩证书...')
	img = Image.open('template.jpg')
	I1 = ImageDraw.Draw(img)
	Font = ImageFont.truetype('PingFang.ttc', 40)
	# 名字
	I1.text((382, 635), text[1].rstrip(), font=Font, fill=(0, 0, 0))
	# 参赛号码
	I1.text((382, 720), text[0], font=Font, fill=(0, 0, 0))
	# 枪响成绩
	I1.text((382, 810), text[2], font=Font, fill=(0, 0, 0))
	# 成绩排名
	I1.text((382, 895), '第 ' + text[4].rstrip() + ' 名（' + group + '）', font=Font, fill=(0, 0, 0))
	img.save(text[1] + ".png")
