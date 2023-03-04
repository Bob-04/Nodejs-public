# Developed by Volodymyr Osadchuk

## How to run

```bash
docker build -t [your-image-name] .
docker run --rm -p 80:80 -m [memory-limit] --cpus="[cpu-limit]" -d [your-image-name]
```
