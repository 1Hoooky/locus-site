# Site Locus Locações

Site profissional para locação de climatizadores e aquecedores.

## 📋 Como Editar o Site

### 1. Alterar Número do WhatsApp

Abra o arquivo `script.js` e localize a linha:

```javascript
const WHATSAPP_NUMBER = '5511999999999';
```

Altere para o seu número no formato: código do país + DDD + número (sem espaços ou caracteres especiais).

Exemplo: `5511987654321`

### 2. Alterar Informações de Contato

Abra o arquivo `index.html` e procure pela seção `<!-- Contato Section -->`.

Você pode editar:
- **Telefone**: Procure por `(11) 99999-9999`
- **E-mail**: Procure por `contato@locuslocacoes.com.br`
- **Localização**: Procure por `São Paulo, SP - Brasil`

### 3. Adicionar/Remover Produtos

No arquivo `index.html`, procure pela seção `<!-- Produtos Section -->`.

Cada produto está dentro de uma `<div class="produto-card">`. Você pode:
- Copiar e colar um card inteiro para adicionar um novo produto
- Editar o título, descrição e características
- Alterar as imagens (veja próxima seção)

### 4. Alterar Imagens dos Produtos

1. Coloque suas imagens na pasta `images/`
2. No arquivo `index.html`, procure por `<img src="images/...">` 
3. Altere o nome do arquivo para o nome da sua imagem

Exemplo:
```html
<img src="images/seu-produto.jpg" alt="Descrição do Produto">
```

### 5. Alterar Cores do Site

Abra o arquivo `styles.css` e procure por `:root` no início do arquivo.

Você pode alterar:
```css
--amarelo: #FFD700;  /* Cor amarela principal */
--preto: #000000;    /* Cor preta principal */
```

### 6. Editar Textos da Página Inicial

No arquivo `index.html`, procure pela seção `<!-- Hero Section -->`.

Você pode editar:
- O título principal
- A descrição
- Os textos dos botões

### 7. Editar Missão, Visão e Valores

No arquivo `index.html`, procure pela seção `<!-- Sobre Section -->`.

Cada card (Missão, Visão, Valores) pode ser editado diretamente no HTML.

### 8. Editar ou Adicionar Depoimentos

No arquivo `index.html`, procure por `<!-- Depoimentos -->`.

Você pode:
- Editar os depoimentos existentes
- Copiar e colar um `<div class="depoimento-card">` para adicionar mais depoimentos
- Alterar o nome e cargo dos autores

## 🚀 Como Usar o Site

### Opção 1: Abrir Localmente
Basta abrir o arquivo `index.html` no seu navegador.

### Opção 2: Hospedar Online
Você pode hospedar gratuitamente em:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- Qualquer servidor web

Basta fazer upload de todos os arquivos (index.html, styles.css, script.js e a pasta images).

## 📁 Estrutura de Arquivos

```
locus-site/
├── index.html       # Página principal (HTML)
├── styles.css       # Estilos (CSS)
├── script.js        # Funcionalidades (JavaScript)
├── README.md        # Este arquivo
└── images/          # Pasta com as imagens
    ├── climatizador-1.jpg
    ├── climatizador-2.jpg
    ├── aquecedor-1.jpg
    └── aquecedor-2.jpg
```

## 💡 Dicas

- Sempre faça backup dos arquivos antes de editar
- Teste as alterações abrindo o arquivo `index.html` no navegador
- Use imagens otimizadas (de preferência em formato JPG ou WebP) para melhor performance
- Mantenha o padrão de cores (amarelo e preto) para consistência visual

## 🎨 Paleta de Cores Utilizada

- **Amarelo Principal**: #FFD700
- **Preto Principal**: #000000
- **Preto Claro**: #1a1a1a
- **Cinza Escuro**: #333333
- **Verde WhatsApp**: #25D366

## 📱 Recursos do Site

✅ Design responsivo (funciona em celulares, tablets e desktops)  
✅ Integração com WhatsApp  
✅ Formulário de contato  
✅ Animações suaves  
✅ Menu mobile  
✅ Botão flutuante do WhatsApp  
✅ Seções: Início, Produtos, Sobre, Contato  

## 🆘 Suporte

Se tiver dúvidas sobre como editar o site, consulte este arquivo README ou procure tutoriais básicos de HTML/CSS online.

---

**Desenvolvido para Locus Locações** - 2025

