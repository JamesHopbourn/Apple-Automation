### Ubnt.py 配置
```
30 3 * * * python3 /root/Ubnt.py
@reboot python3 /root/last_seen.py
```

### Note
```
sed  "s/\(username\|password\|mac_address\) = '.*'/\1 = ''/" Ubnt.py
```
