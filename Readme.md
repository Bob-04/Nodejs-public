# Developed by Volodymyr Osadchuk

## How to run

```bash
docker build -t [your-image-name] .
docker run --rm -p 80:8080 -m [memory-limit] --cpus="[cpu-limit]" -d [your-image-name]
```
