
# 2.1 Git & GitHub - O que é e para que serve

Neste exercício, instalei, configurei e pratiquei comandos básicos do git

## Parte 1

### Identidade

Definindo meus dados na configuração global do git

	git config --global user.name "Meu Nome"
	git config --global user.email "meuemail@exemplo.br"


### Editor

Definindo o editor padrão que o git deve usar

	git config --global core.editor "code --wait"


### Versão e configurações

Verificando a versão e configurações definidas por mim

	git --version
	git config --list


## Parte 3

### Gerando uma chave SSH

Gerando uma chave para acessar o GitHub via ssh
```
ssh-keygen -t rsa -b 4096 -C "meuemail@exemplo.com"
```

### Adicionando minha chave ao ssh-agent

Iniciando o ssh-agent

	eval "$(ssh-agent -s)"


Adicionando a chave à pasta padrão

	ssh-add ~/.ssh/id_rsa

## Parte 4

### Criando um repositório local

Navegando até a pasta desejada e inicializando o git

	git init

### Adicionando e commitando

Preparando os arquivos para serem commitados

	git add [nome_do_arquivo]


Commitando os arquivos

	git commit -m "Mensagem de commit"


### Conectando um repositório local com um remoto e sincronizando

Conectando

	git remote add origin [url_do_repositório]

Sincronizando

	git push origin master



