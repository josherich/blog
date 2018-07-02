# Network

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