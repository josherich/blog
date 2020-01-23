# Ops

## Network

## disable ipv6

```
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv6.conf.lo.disable_ipv6 = 1

> sysctl -w net.ipv4.ip_forward=1
> sysctl --system

> $ sysctl -a | grep kernel
```

## mariadb

```
sudo launchctl stop com.mariadb.server
sudo launchctl start com.mariadb.server
```

> disk usage

```bash
du -csh *
du -csh .??*
du -csh {.??*,*}
```

> find file

```bash
find . -iname "*.c"
```

> restart audio macos

```bash
killall coreaudiod
```

**simple server**

`python -m SimpleHTTPServer 8080`

**kill and recover**
```
killall -STOP Slack
killall -CONT Slack
```

**delete all branch except current**
```
git branch | grep -v "^\\*" | xargs git branch -D
```

> [using github for course and assignment](http://www.alecjacobson.com/weblog/?p=4700)