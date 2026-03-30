# MongoDB Docker Setup

## Quick Start

```bash
cd docker/mongodb
cp .env.example .env
docker-compose up -d
```

## Configuration

Edit `.env` to customize:
- `MONGO_USER` - Database username (default: root)
- `MONGO_PASSWORD` - Database password
- `MONGO_DB` - Initial database name

## Commands

```bash
# Start MongoDB
docker-compose up -d

# Stop MongoDB
docker-compose down

# View logs
docker-compose logs -f mongodb

# Connect via CLI
docker exec -it juanma-mongodb mongosh -u root -p
```
