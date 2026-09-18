# Doan Casotti — Portfólio

Portfólio profissional com foco em **Cloud, automação e dados**.

**Site:** https://doancasotti.github.io/

## Executar localmente

Abra `index.html` no navegador, ou execute na pasta do projeto:

```bash
python3 -m http.server 8000
```

No Windows, se necessário, use `py -m http.server 8000`. Acesse http://localhost:8000.

## Estrutura

- `index.html`: apresentação, projetos, experiência e contato.
- `styles.css`: layout responsivo, estilos de impressão e foco de teclado.
- `script.js`: filtro de projetos com anúncio acessível do resultado.
- `assets/favicon.svg`: identidade visual.
- `.nojekyll`: publicação direta dos arquivos estáticos no GitHub Pages.

Não há dependências de produção, compilação, fontes externas, cookies ou serviços de analytics. Sem JavaScript, todos os projetos e seus detalhes continuam acessíveis.

## Atualizar conteúdo

Edite os textos e links em `index.html`. Os projetos ficam em elementos `article` com `data-category="cloud"` ou `data-category="automation"`. Ao adicionar um projeto, ajuste também o contador do botão "Todos".

O conteúdo usa a trajetória consolidada em 18/09/2026. Projetos de estudo são identificados, e os créditos da aplicação BIA são preservados. Os diagramas são conceituais; não são monitores de ambientes ativos.

## Publicação

Repositório: `DoanCasotti/doancasotti.github.io`.

No GitHub, em **Settings → Pages**, use **Deploy from a branch**, branch **main**, pasta **/ (root)**. Novos commits em `main` atualizam o site.

Somente esta pasta deve ser publicada. Os arquivos de carreira, currículos antigos, backups e documentos de terceiros ficam fora deste repositório.

## Verificação

Validar em desktop e celular: navegação, filtros (4 projetos no total, 3 de cloud e 1 de automação), abertura dos detalhes, links de contato e ausência de rolagem horizontal. Conferir também navegação por teclado e a página com JavaScript desativado.
