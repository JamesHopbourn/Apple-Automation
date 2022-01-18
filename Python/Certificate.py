import sys
from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont

file = str(sys.argv[1])
group = str(sys.argv[2])
ranks = open(name, 'r')
content = ranks.readlines()
for text in content:
	text = text.split(',')
	print('正在生成' + text[0] + '的成绩证书...')
	img = Image.open('temple.png')
	I1 = ImageDraw.Draw(img)
	Font = ImageFont.truetype('Songti.ttc', 40)
	I1.text((382, 635), text[0].rstrip(), font=Font, fill=(0, 0, 0))
	I1.text((382, 720), text[1], font=Font, fill=(0, 0, 0))
	I1.text((382, 810), text[2], font=Font, fill=(0, 0, 0))
	I1.text((382, 895), '第 ' + text[3].rstrip() + ' 名（' + group + '）', font=Font, fill=(0, 0, 0))
	img.save(text[0] + ".png")