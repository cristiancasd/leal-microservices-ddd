#!/bin/bash
# wait-for-it.sh

set -e

host="$1"
port="$2"
shift 2
cmd="$@"

until nc -z $host $port; do
  >&2 echo "El servidor Kafka todavía no está disponible - esperando..."
  sleep 1
done

>&2 echo "El servidor Kafka está ahora disponible, ejecutando los tests."
exec $cmd