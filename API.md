# API Documentation

## Endpoints

### Health Check

**GET** `/api/health`

Verifica o status da API e o tipo de storage em uso.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-12-15T10:30:00.000Z",
  "storage": "memory" // ou "database"
}
```

---

### Get User by ID

**GET** `/api/users/:id`

Busca um usuário pelo ID.

**Parameters:**
- `id` (path) - ID do usuário (UUID)

**Response Success (200):**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "username": "exemplo"
}
```

**Response Error (404):**
```json
{
  "message": "User not found"
}
```

---

### Get User by Username

**GET** `/api/users/username/:username`

Busca um usuário pelo username.

**Parameters:**
- `username` (path) - Nome de usuário

**Response Success (200):**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "username": "exemplo"
}
```

**Response Error (404):**
```json
{
  "message": "User not found"
}
```

---

### Create User

**POST** `/api/users`

Cria um novo usuário.

**Request Body:**
```json
{
  "username": "novousuario",
  "password": "senhasegura123"
}
```

**Response Success (201):**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "username": "novousuario"
}
```

**Response Error (400 - Validation Error):**
```json
{
  "message": "Validation error",
  "errors": "Descrição do erro de validação"
}
```

**Response Error (409 - Conflict):**
```json
{
  "message": "Username already exists"
}
```

---

## Database Configuration

### Development (In-Memory)

Por padrão, sem configurar `DATABASE_URL`, a aplicação usa armazenamento em memória. Os dados são perdidos quando o servidor é reiniciado.

### Production (PostgreSQL)

Para usar PostgreSQL em produção:

1. Configure a variável de ambiente `DATABASE_URL`:
   ```bash
   export DATABASE_URL="postgresql://user:password@host:port/database"
   ```

2. Execute as migrations:
   ```bash
   npm run db:push
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```

### Environment Variables

Copie o arquivo `.env.example` para `.env` e configure as variáveis:

```bash
cp .env.example .env
```

Edite `.env` com suas configurações:
```env
DATABASE_URL=postgresql://localhost:5432/deepmed
PORT=5000
NODE_ENV=production
```

---

## Security Notes

- As senhas são armazenadas no banco de dados **sem criptografia** nesta implementação básica
- Para produção, implemente hash de senha usando bcrypt ou similar
- Nunca retorne a senha do usuário nas respostas da API
- Implemente autenticação e autorização adequadas antes do deploy em produção
