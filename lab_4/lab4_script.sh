#!/bin/bash
# Authors :ShanchengHuang
# Date: 09/19/2020

cp ~/var/log/syslog /home
egreq "error" syslog | tee error_log_check.txt
mail -s 'System Error' 2437065479@qq.com <<< 'testing message body' /error_log_check.txt
