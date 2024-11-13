'use client'; // Diretiva para tornar este componente um Componente de Cliente

import { useState } from 'react';
import styles from './imposto.module.css';

const ImpostoPage = () => {
  const [isPessoaFisica, setIsPessoaFisica] = useState<boolean>(true); // Controle do botão selecionado
  const [impostoDevido, setImpostoDevido] = useState<number>(0); // Estado para o valor do imposto devido
  const [valorDoacao, setValorDoacao] = useState<number>(0); // Valor de doação calculado

  // Cálculo do valor de doação
  const calcularDoacao = (imposto: number) => {
    let percentual = isPessoaFisica ? 0.06 : 0.01; // 6% para Pessoa Física e 1% para Pessoa Jurídica
    setValorDoacao(imposto * percentual);
  };

  const stepContent = {
    pessoaFisica: [
      { step: 1, description: 'Acesse o site “Criança quer Futuro”.' },
      { step: 2, description: 'Escolha a entidade “Casa da Paz” e o projeto “Sonhe com uma Criança”.' },
      { step: 3, description: 'Insira o valor correspondente a 6% do seu imposto devido.' },
      { step: 4, description: 'Complete os dados solicitados e emita o boleto de contribuição.' },
      { step: 5, description: 'Envia o boleto pago para casadapazassociacao@gmail.com.' },
    ],
    pessoaJuridica: [
      { step: 1, description: 'Acesse o site “Criança quer Futuro”.' },
      { step: 2, description: 'Escolha a entidade “Casa da Paz” e o projeto “Sonhe com uma Criança”.' },
      { step: 3, description: 'Insira o valor correspondente a 1% do seu imposto devido.' },
      { step: 4, description: 'Complete os dados e emita o boleto.' },
      { step: 5, description: 'Envia o boleto pago para casadapazassociacao@gmail.com.' },
    ],
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Transforme o Imposto de Renda em Sonhos!</h1>
        <p className={styles.subtitle}>
          Contribua para o projeto “Sonhe com uma Criança” e ajude crianças e adolescentes a terem acesso à
          educação, arte, esporte e uma alimentação digna. Saiba como você pode destinar parte do seu Imposto de
          Renda para essa causa.
        </p>
      </header>

      {/* Seleção de Pessoa Física ou Jurídica */}
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.button} ${isPessoaFisica ? styles.active : ''}`}
          onClick={() => { setIsPessoaFisica(true); setValorDoacao(0); }}
        >
          Pessoa Física
        </button>
        <button
          className={`${styles.button} ${!isPessoaFisica ? styles.active : ''}`}
          onClick={() => { setIsPessoaFisica(false); setValorDoacao(0); }}
        >
          Pessoa Jurídica
        </button>
      </div>

      {/* Cálculo do Imposto Devido */}
      <div className={styles.calculator}>
        <label htmlFor="impostoDevido" className={styles.calculatorLabel}>Informe o valor do Imposto Devido:</label>
        <input
          type="number"
          id="impostoDevido"
          value={impostoDevido}
          onChange={(e) => {
            const valor = parseFloat(e.target.value);
            setImpostoDevido(valor);
            calcularDoacao(valor);
          }}
          className={styles.calculatorInput}
          placeholder="R$ 0,00"
        />
        {valorDoacao > 0 && (
          <p className={styles.calculatorResult}>
            Você pode doar R$ {valorDoacao.toFixed(2)} para o projeto.
          </p>
        )}
        {valorDoacao === 0 && impostoDevido > 0 && (
          <div className={styles.loadingSpinner}>Calculando...</div>
        )}
      </div>

      {/* Informações sobre como doar */}
      <div className={styles.content}>
        <section className={styles.stepsSection}>
          <h2 className={styles.highlightedTitle}>
            Como realizar a doação de Imposto de Renda ({isPessoaFisica ? 'Pessoa Física' : 'Pessoa Jurídica'}):
          </h2>
          <ul className={styles.steps}>
            {stepContent[isPessoaFisica ? 'pessoaFisica' : 'pessoaJuridica'].map((step, index) => (
              <li key={index} className={styles.step}>
                <span className={styles.stepNumber}>{step.step}</span>
                <span className={styles.stepDescription}>{step.description}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Impacto do Projeto */}
        <section className={styles.impactSection}>
          <h2 className={styles.impactTitle}>O Impacto da Sua Contribuição</h2>
          <p className={styles.impactText}>
            Com a sua contribuição, ajudamos a transformar a vida de centenas de crianças e adolescentes,
            proporcionando acesso à educação, formação profissional e outros direitos fundamentais.
          </p>
        </section>

        {/* Depoimentos */}
        <section className={styles.testimonials}>
          <h2 className={styles.testimonialsTitle}>O que dizem os beneficiados:</h2>
          <div className={styles.testimonial}>
            <p className={styles.testimonialText}>
              "Ajudamos minha filha a alcançar um futuro melhor graças a essa iniciativa."
            </p>
            <p className={styles.testimonialAuthor}>- João Silva, Pai de aluna</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImpostoPage;
