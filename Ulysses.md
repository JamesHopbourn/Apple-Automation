# Ulysses
关于 Ulysses 的一些进阶玩法

# Writing Tables in Ulysses
#### 声明使用 LaTeX，这行代码要放在文章开头
``` 
~~ <script type="text/x-mathjax-config">
~~ MathJax.Hub.Config({tex2jax: {inlineMath:[['$','$']]}});
~~ </script>
~~ <script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
```

## 方法一
Ulysses 本身自带表格功能，只是藏地比较深而已，在软件的介绍的 Markdown 里面的技客角文中有提到。
```
~~ <table border=”1">
~~ <tr><th>城市</th><th>国家</th><th>河流</th></tr>
~~ <tr><td>汉堡</td>∑<td>匈牙利</td><td>埃罗河</td></tr>
~~ <tr><td>莱比锡</td><td>拉脱维亚</td><td>略夫雷加特河</td></tr>
~~ </table>
```

## 方法二
使用 LaTeX 的表格功能，表格代码：
```
~~$$\begin{array}{c|lcr}物质 & \text{状态} & \text{颜色} & \text{性质} & \text{保存方法} & \text{萃取颜色}\\\hline ~Cl_{2}~ & 气体 & 黄绿色 & 易液化 & 钢瓶存储 & 无 \\ ~Br_{2} & 液体 & 深红棕色 & 易挥发 & 水封保存 & 橙红色\\ ~I_{2}~ & 固体 & 紫黑色 & 易升华 & 棕色瓶子 & 紫色(上层)\\ \end{array} $$

~~ <script type="text/x-mathjax-config">
~~ MathJax.Hub.Config({tex2jax: {inlineMath:[['$','$']]}});
~~ </script>
~~ <script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
~~<script type="text/x-mathjax-config">
~~ MathJax.Hub.Config({
~~ TeX: {extensions: ["mhchem.js"]}
~~});
~~</script>
~~<script src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML"></script>
```

## 格式
```
化学式：~$$~
化学方程式：~$\ce{}$~
离子符号：~$^{+}$~
气体气标：^
沉淀下标：v
```

## 离子符号
```
~$Ag^{+}$~ > ~$Hg^{+}$~ > ~$Fe^{3+}$~ > ~$Cu^{2+}$~ > ~$H^{+}$~ > ~$Pb^{2+}$~ > ~$Sn^{2+}$~ > ~$Fe^{2+}$~ > ~$Zn^{2+}$~ > ~$Al ^{3+}$~ > ~$Mg ^ {2+}$~ > ~$Na ^ {+}$~ > ~$Ca ^ {2+}$~ > ~$K ^{+}$~
```

## 单质/化合物
```
氢氧化钠：~$NaOH$~  
硫酸：~$H_{2}SO4$~  
氧气：~$O_{2}$~ 
水：~$H_{2}O$~
```

## 反应方程式
```
~$\ce{2H_{2} + O_{2} ->T[燃烧] 2~$H_{2}O$~} $~
~$\ce{N2 + 3H_{2} <=>T[高温、加压][催化剂] 2NH3}$~
```

## 电化学
```
总方程式：~$\ce{CH_{4} + 2O_{2} -> CO_{2} + 2H_{2}O}$~
正极：~$\ce{CH_{4} － 4e- -> CO_{2} ＋ 4H+}$~
负极：~$\ce{2O_{2} + 4e- + 4H+ -> 2H_{2}O}$~
```