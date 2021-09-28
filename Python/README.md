### Ubnt.py 配置
```
00 3 * * * python3 /root/Ubnt.py
@reboot python3 /root/last_seen.py
@reboot autossh -M 1234 -fNTR 7777:localhost:3306 james@james.local
@reboot autossh -M 2345 -fNTR 7777:localhost:3306 root@VPS_IP
```

### Note
```
sed  "s/\(username\|password\|mac_address\) = '.*'/\1 = ''/" Ubnt.py
```
