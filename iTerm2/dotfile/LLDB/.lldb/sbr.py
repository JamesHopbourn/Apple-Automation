#!/usr/bin/python
#coding:utf-8

import lldb
import commands
import optparse
import shlex
import re


# 获取ASLR偏移地址
def get_ASLR():
    # 获取'image list -o'命令的返回结果
    interpreter = lldb.debugger.GetCommandInterpreter()
    returnObject = lldb.SBCommandReturnObject()
    interpreter.HandleCommand('image list -o', returnObject)
    output = returnObject.GetOutput();
    # 正则匹配出第一个0x开头的16进制地址
    match = re.match(r'.+(0x[0-9a-fA-F]+)', output)
    if match:
        return match.group(1)
    else:
        return None

# Super breakpoint
def sbr(debugger, command, result, internal_dict):

    #用户是否输入了地址参数
    if not command:
        print >>result, 'Please input the address!'
        return

    ASLR = get_ASLR()
    if ASLR:
        #如果找到了ASLR偏移，就设置断点
        debugger.HandleCommand('br set -a "%s+%s"' % (ASLR, command))
    else:
        print >>result, 'ASLR not found!'

# And the initialization code to add your commands 
def __lldb_init_module(debugger, internal_dict):
    # 'command script add sbr' : 给lldb增加一个'sbr'命令
    # '-f sbr.sbr' : 该命令调用了sbr文件的sbr函数
    debugger.HandleCommand('command script add sbr -f sbr.sbr')
    print 'The "sbr" python command has been installed and is ready for use.'
