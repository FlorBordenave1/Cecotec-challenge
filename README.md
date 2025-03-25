# Proyecto E-commerce con Next.js y ShadCN

Este proyecto es una aplicación de e-commerce desarrollada con **Next.js**, **tailwindcss**, y **ShadCN** como biblioteca de componentes. Implementa un sistema de autenticación, gestión de carrito y visualización de productos mediante Fetch API y Context API.

## 📦 Instalación

1. Clona este repositorio:

```bash
  git clone https://github.com/FlorBordenave1/Cecotec-challenge
```

2. Accede al directorio del proyecto
3. Instala las dependencias:

```bash
  npm install
```

## 🚀 Ejecución

Para iniciar el entorno de desarrollo:

```bash
  npm run dev
```

## 📚 Estructura del Proyecto

Me decidi por una estructura basada en features.

## 🌐 Funcionalidades

### **Home Page**

- Header con logo y menú de usuario.
- Grid de categorías con diseño responsive (5 en escritorio, 4 en tablet, 2 en móvil).
- Footer con botón de cierre de sesión.

### **Login Page**

- Formulario de login.
- Validación de credenciales a partir de un archivo JSON local.
- Manejo de estado con Context API.
- Toast de error en caso de credenciales incorrectas.

### **Categoría Page**

- Visualización de productos de una categoría.
- Grid de productos (5 en escritorio, 3 en tablet, 2 en móvil).
- Ordenamiento por productos más vendidos.
- Visualización de stock y descuentos.

### **Producto Page**

- Detalle del producto con imagen e información.
- Botón para añadir al carrito.

### **Carrito Page**

- Visualización de productos en el carrito.
- Botones para incrementar, decrementar y eliminar productos.
- Cálculo dinámico de cantidades y precios.
- Botón para realizar el pago (simulado).

## 🛠️ Tecnologías Utilizadas

- **Next.js**
- **ShadCN**
- **Context API**
- **Fetch API**
- **LocalStorage**
