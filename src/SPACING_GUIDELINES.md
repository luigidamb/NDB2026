# 📐 Spacing & Layout Guidelines - NDB Web Service

## 🎯 Obiettivo

Definire un sistema di spaziature coerente e professionale per tutto il sito, eliminando spazi bianchi eccessivi e migliorando l'allineamento dei contenuti.

---

## 📏 Sistema di Spaziature

### Sezioni (Padding Verticale)

| Tipo Sezione | Mobile | Desktop | Quando Usare |
|--------------|--------|---------|--------------|
| **Hero principale** | `py-16` | `py-24` | Prima sezione homepage/landing |
| **Sezioni standard** | `py-12` | `py-20` | Tutte le altre sezioni |
| **Sezioni compatte** | `py-8` | `py-12` | FAQ, CTA finali, sezioni secondarie |

```tsx
// ✅ CORRETTO
<section className="py-16 md:py-24">  {/* Hero */}
<section className="py-12 md:py-20">  {/* Sezione standard */}
<section className="py-8 md:py-12">   {/* Sezione compatta */}

// ❌ SBAGLIATO
<section className="py-16 md:py-24">  {/* Usato ovunque - troppo spazio! */}
```

---

### Titoli e Sottotitoli

| Elemento | Margin Bottom | Quando Usare |
|----------|---------------|--------------|
| **h1** | `mb-6` | Titolo principale pagina |
| **h2** | `mb-4` | Titolo sezione |
| **h3** | `mb-3` | Sottotitolo card/blocco |
| **h4/h5** | `mb-2` | Titolo piccolo |
| **p sotto h2** | `mb-8` o `mb-12` | Sottotitolo esplicativo sezione |

```tsx
// ✅ CORRETTO - Sezione con titolo e descrizione
<div className="text-center mb-12">
  <h2 className="mb-4">Titolo Sezione</h2>
  <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
    Descrizione che spiega la sezione
  </p>
</div>

// ❌ SBAGLIATO - Spazio eccessivo
<h2 className="mb-12 text-center">Titolo Sezione</h2>
<div className="grid...">
  {/* Contenuto troppo distante dal titolo */}
</div>
```

---

### Grid e Gap

| Tipo Layout | Gap | Quando Usare |
|-------------|-----|--------------|
| **Cards grid** | `gap-6` | Grid standard di card |
| **Form fields** | `gap-4` | Campi form |
| **Stats inline** | `gap-8 md:gap-12` | Numeri affiancati |
| **List items** | `space-y-3` | Liste verticali |

```tsx
// ✅ CORRETTO
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Cards */}
</div>

// ❌ SBAGLIATO - Gap inconsistenti
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">  {/* Troppo */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">  {/* Troppo poco */}
```

---

## 🏗️ Template Sezioni Standard

### Hero con Stats

```tsx
<section className="py-16 md:py-24">
  <div className="max-w-[1360px] mx-auto px-4 md:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="mb-6">Titolo Hero</h1>
        <p className="text-xl text-[var(--muted)] mb-8">
          Sottotitolo descrittivo
        </p>
        <Button>CTA</Button>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {/* Stats cards */}
      </div>
    </div>
  </div>
</section>
```

---

### Sezione Standard con Cards

```tsx
<section className="py-12 md:py-20" style={{ backgroundColor: 'var(--surface)' }}>
  <div className="max-w-[1360px] mx-auto px-4 md:px-8">
    <div className="text-center mb-12">
      <h2 className="mb-4">Titolo Sezione</h2>
      <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
        Descrizione della sezione in 1-2 righe
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Cards */}
    </div>
  </div>
</section>
```

---

### Card con Icona e Testo

```tsx
<div 
  className="flex gap-4 p-6 rounded-2xl transition-all hover:shadow-lg"
  style={{ 
    backgroundColor: 'var(--bg)',
    border: '1px solid var(--border)'
  }}
>
  <div className="flex-shrink-0">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center">
      <Icon className="w-6 h-6 text-white" />
    </div>
  </div>
  <div>
    <h5 className="mb-2">Titolo Card</h5>
    <p className="text-sm text-[var(--muted)]">
      Descrizione breve della funzionalità
    </p>
  </div>
</div>
```

---

### Card Numerata con Lista

```tsx
<div 
  className="rounded-2xl p-6"
  style={{ 
    backgroundColor: 'var(--surface)',
    border: '1px solid var(--border)'
  }}
>
  <div className="flex items-center gap-3 mb-4">
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center flex-shrink-0">
      <span className="text-white">1</span>
    </div>
    <h4>Titolo Step</h4>
  </div>
  <ul className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2">
        <CheckCircle2 className="w-4 h-4 text-[var(--accent-2)] mt-0.5 flex-shrink-0" />
        <span className="text-sm text-[var(--muted)]">{item}</span>
      </li>
    ))}
  </ul>
</div>
```

---

### FAQ Accordion

```tsx
<section className="py-12 md:py-20">
  <div className="max-w-[1360px] mx-auto px-4 md:px-8">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="mb-4">Domande Frequenti</h2>
        <p className="text-lg text-[var(--muted)]">
          Sottotitolo opzionale
        </p>
      </div>
      <Accordion type="single" collapsible className="space-y-4">
        {/* FAQ items */}
      </Accordion>
    </div>
  </div>
</section>
```

---

### CTA Finale

```tsx
<section className="py-12 md:py-20" style={{ backgroundColor: 'var(--surface)' }}>
  <div className="max-w-[1360px] mx-auto px-4 md:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="mb-6">Titolo CTA</h2>
      <p className="text-xl text-[var(--muted)] mb-8">
        Descrizione che invoglia all'azione
      </p>
      <Button size="lg">CTA Button</Button>
    </div>
  </div>
</section>
```

---

## 🎨 Allineamenti e Centratura

### Testo Centrato (Intro Sezioni)

```tsx
// ✅ CORRETTO - Container limitato
<div className="text-center mb-12">
  <h2 className="mb-4">Titolo</h2>
  <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
    Testo centrato con larghezza massima
  </p>
</div>

// ❌ SBAGLIATO - Testo troppo largo
<div className="text-center mb-12">
  <h2 className="mb-4">Titolo</h2>
  <p className="text-lg text-[var(--muted)]">
    Testo che si estende per tutta la larghezza
  </p>
</div>
```

---

### Icone e Testi Allineati

```tsx
// ✅ CORRETTO - Icona allineata in alto con mt-0.5
<li className="flex items-start gap-2">
  <CheckCircle2 className="w-4 h-4 text-[var(--accent-2)] mt-0.5 flex-shrink-0" />
  <span className="text-sm text-[var(--muted)]">Testo che può andare su più righe</span>
</li>

// ❌ SBAGLIATO - items-center disallinea con testo multiriga
<li className="flex items-center gap-2">
  <CheckCircle2 className="w-4 h-4 text-[var(--accent-2)]" />
  <span className="text-sm">Testo</span>
</li>
```

---

## 📱 Container e Padding Laterali

### Container Principale

```tsx
// ✅ SEMPRE usare questo container
<div className="max-w-[1360px] mx-auto px-4 md:px-8">
  {/* Contenuto */}
</div>
```

### Container Stretto (CTA, FAQ, Content)

```tsx
// ✅ Per contenuti testuali
<div className="max-w-3xl mx-auto text-center">
  {/* Contenuto centrato */}
</div>

// ✅ Per paragrafi intro
<p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
  Testo introduttivo
</p>
```

---

## 🔢 Sistema Numerico di Reference

### Spacing Scale (Tailwind)

| Classe | Pixels | Quando Usare |
|--------|--------|--------------|
| `gap-2` | 8px | Icona + testo inline |
| `gap-3` | 12px | Lista items verticali |
| `gap-4` | 16px | Form fields, cards compatte |
| `gap-6` | 24px | **Grid cards standard** ⭐ |
| `gap-8` | 32px | Stats, grandi elementi |
| `gap-12` | 48px | Hero grid 2 colonne |

### Margin Bottom Scale

| Classe | Pixels | Quando Usare |
|--------|--------|--------------|
| `mb-2` | 8px | h5, label piccoli |
| `mb-3` | 12px | h4, h3 in card |
| `mb-4` | 16px | **h2 con descrizione sotto** ⭐ |
| `mb-6` | 24px | **h1, h2 senza descrizione** ⭐ |
| `mb-8` | 32px | Paragrafi, descrizioni |
| `mb-12` | 48px | **Blocco intro completo** ⭐ |

---

## ✅ Checklist Revisione Pagina

Prima di considerare una pagina "finita", verificare:

### Spaziature Verticali
- [ ] Hero usa `py-16 md:py-24`
- [ ] Sezioni standard usano `py-12 md:py-20`
- [ ] Nessuna sezione usa `py-16 md:py-24` tranne hero
- [ ] Spazio tra sezioni alternate (bg bianco/surface) è coerente

### Titoli e Descrizioni
- [ ] h2 ha `mb-4` (non mb-6 o mb-12)
- [ ] Descrizione sotto h2 ha `mb-8` o `mb-12`
- [ ] Blocco intro completo ha `mb-12`
- [ ] Titoli card (h4/h5) hanno `mb-2` o `mb-3`

### Grid e Gap
- [ ] Tutti i grid di cards usano `gap-6`
- [ ] Liste verticali usano `space-y-3`
- [ ] Nessun gap > 12 tranne hero speciali

### Allineamenti
- [ ] Icone in liste usano `items-start` + `mt-0.5`
- [ ] Testo centrato usa `max-w-2xl mx-auto` o `max-w-3xl`
- [ ] Cards con icona usano `flex-shrink-0` sull'icona
- [ ] Numeri step hanno `flex-shrink-0`

### Cards e Componenti
- [ ] Cards hanno padding `p-6` standard
- [ ] Cards hanno `rounded-2xl` (non rounded-xl)
- [ ] Hover effects su cards: `hover:shadow-lg`
- [ ] Icone in cerchio: `w-12 h-12` standard
- [ ] Icone numerate: `w-10 h-10` compatte

### Responsive
- [ ] Grid usa breakpoints corretti (md:grid-cols-2 lg:grid-cols-3)
- [ ] Padding laterale usa `px-4 md:px-8`
- [ ] Hero grid usa `lg:grid-cols-2` (non md)
- [ ] Testo usa dimensioni responsive dove serve

---

## 🚫 Errori Comuni da Evitare

### ❌ Spazio Bianco Eccessivo

```tsx
// ❌ SBAGLIATO
<h2 className="mb-12 text-center">Titolo</h2>
<section className="py-16 md:py-24"> {/* Ogni sezione */}
<div className="grid gap-8"> {/* Gap troppo grande */}

// ✅ CORRETTO
<h2 className="mb-4">Titolo</h2>
<section className="py-12 md:py-20"> {/* Sezioni standard */}
<div className="grid gap-6"> {/* Gap standard */}
```

---

### ❌ Allineamenti Inconsistenti

```tsx
// ❌ SBAGLIATO - Allineamento misto
<section>
  <h2 className="text-center mb-12">Titolo Centrato</h2>
  <div className="grid">
    <div className="text-left">Card 1</div>
    <div className="text-center">Card 2</div>
  </div>
</section>

// ✅ CORRETTO - Allineamento coerente
<section>
  <div className="text-center mb-12">
    <h2 className="mb-4">Titolo Centrato</h2>
    <p className="max-w-2xl mx-auto">Descrizione</p>
  </div>
  <div className="grid">
    {/* Tutte le card con stesso stile */}
  </div>
</section>
```

---

### ❌ Container Senza Limiti

```tsx
// ❌ SBAGLIATO
<p className="text-center text-lg">
  Testo che si estende per tutta la larghezza dello schermo su desktop largo
</p>

// ✅ CORRETTO
<p className="text-center text-lg max-w-2xl mx-auto">
  Testo limitato a larghezza leggibile
</p>
```

---

## 📊 Prima e Dopo - Lead Generation Page

### Prima (Problemi)
```tsx
// Spaziature eccessive
<section className="py-16 md:py-24"> {/* Ovunque */}
<h2 className="mb-12 text-center">Titolo</h2>  {/* 48px gap */}
<div className="grid gap-8"> {/* Inconsistente */}

// Allineamenti misti
<h2 className="mb-12 text-center">Canali</h2>
<div className="flex gap-4"> {/* Card senza container */}
```

### Dopo (Corretto)
```tsx
// Spaziature ottimizzate
<section className="py-12 md:py-20"> {/* Sezioni standard */}
<div className="text-center mb-12">
  <h2 className="mb-4">Titolo</h2>
  <p className="text-lg max-w-2xl mx-auto">Descrizione</p>
</div>
<div className="grid gap-6"> {/* Consistente */}

// Allineamenti coerenti
<div className="flex gap-4 p-6 rounded-2xl" style={{ border }}>
  {/* Card con padding e border */}
</div>
```

---

## 🎯 Regole d'Oro

1. **Hero = py-16 md:py-24**, tutto il resto **= py-12 md:py-20**
2. **h2 = mb-4**, mai mb-12 (a meno che non ci sia descrizione)
3. **Gap cards = gap-6** sempre
4. **Intro sezione = mb-12** (blocco h2 + p completo)
5. **Testo centrato = max-w-2xl mx-auto**
6. **Cards = p-6 rounded-2xl** standard
7. **Icone liste = items-start mt-0.5**
8. **Container = max-w-[1360px] mx-auto px-4 md:px-8**

---

## 📝 Template Completo Pagina Tipo

```tsx
export const ServicePage: React.FC = () => {
  return (
    <div>
      <Breadcrumb items={[...]} />

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">Hero Title</h1>
              <p className="text-xl text-[var(--muted)] mb-8">Subtitle</p>
              <Button>CTA</Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {/* Stats */}
            </div>
          </div>
        </div>
      </section>

      {/* Sezione 1 */}
      <section className="py-12 md:py-20" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Section Title</h2>
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              Description
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cards */}
          </div>
        </div>
      </section>

      {/* Sezione 2 */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Section Title</h2>
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              Description
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cards */}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">FAQ</h2>
              <p className="text-lg text-[var(--muted)]">Subtitle</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {/* FAQ */}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">CTA Title</h2>
            <p className="text-xl text-[var(--muted)] mb-8">Description</p>
            <Button size="lg">CTA Button</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
```

---

**Spacing System v1.0**  
**Status**: Production Standard  
**Applicare a**: Tutte le pagine del sito  
**Prossima Review**: Dopo applicazione completa
