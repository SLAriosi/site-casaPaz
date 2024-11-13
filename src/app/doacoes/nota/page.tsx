'use client';

import React, { useState } from 'react';
import './NotaParana.css';
import { FaDesktop, FaMobileAlt, FaStore, FaPlusCircle } from 'react-icons/fa';

const NotaParana = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    nomeEstabelecimento: '',
    razaoSocial: '',
    nomeResponsavel: '',
    endereco: '',
    lojas: [{ nome: '', responsavel: '' }],
  });

  const handleTogglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
    setSelectedOption(null);
  };

  const handleOptionSelection = (option: string) => {
    setSelectedOption(option);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number | null = null) => {
    const { name, value } = e.target;
    if (index !== null) {
      const updatedLojas = [...formData.lojas];
      updatedLojas[index][name] = value;
      setFormData({ ...formData, lojas: updatedLojas });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddLoja = () => {
    setFormData({ ...formData, lojas: [...formData.lojas, { nome: '', responsavel: '' }] });
  };

  const steps = {
    site: [
      "1. Acesse o site do Nota Paraná: [Link para o site]",
      "2. Faça login no sistema ou crie uma conta caso ainda não tenha.",
      "3. Vá até o menu 'MINHAS DOAÇÕES' e clique em 'Doar Notas'.",
      "4. Escolha a Casa da Paz para direcionar a sua doação.",
      "5. Finalize o processo e pronto! Sua doação será registrada."
    ],
    app: [
      "1. Baixe o aplicativo 'Nota Paraná' na Google Play ou App Store.",
      "2. Abra o app e faça login ou crie uma conta.",
      "3. Acesse a seção 'Doações' no menu principal.",
      "4. Selecione 'Doar Notas' e escolha a Casa da Paz como beneficiário.",
      "5. Complete a doação diretamente no seu celular."
    ],
    fisicamente: [
      "1. Entre em contato com a Casa da Paz para solicitar a caixinha de doações.",
      "2. A caixinha deve ser colocada em seu estabelecimento.",
      "3. Incentive seus clientes a depositarem suas notas fiscais na caixinha.",
      "4. Periodicamente, a Casa da Paz irá recolher as doações."
    ]
  };

  return (
    <div className="nota-parana-container">
      <header className="header">
        <h1>Como Ajudar a Casa da Paz com Suas Notas Fiscais</h1>
        <p>
          Com sua colaboração por meio do sistema Nota Paraná, você pode ajudar a Casa da Paz a impactar a vida de centenas de crianças e adolescentes.
        </p>
      </header>

      <section className="info-card">
        <h2>Como Funciona a Doação de Notas Fiscais?</h2>
        <p>
          As notas fiscais sem CPF podem ser doadas para entidades como a Casa da Paz, ajudando a transformar a vida de crianças e adolescentes por meio de projetos sociais.
        </p>
      </section>

      <section className="donation-section">
        <button className="donate-button" onClick={handleTogglePanel}>
          Doar Notas Fiscais
        </button>

        {isPanelOpen && (
          <div className="donation-options">
            <div className="donation-option" onClick={() => handleOptionSelection('site')}>
              <FaDesktop size={30} />
              <h3>Pelo Site</h3>
            </div>
            <div className="donation-option" onClick={() => handleOptionSelection('app')}>
              <FaMobileAlt size={30} />
              <h3>Pelo App</h3>
            </div>
            <div className="donation-option" onClick={() => handleOptionSelection('fisicamente')}>
              <FaStore size={30} />
              <h3>Fisicamente</h3>
            </div>
          </div>
        )}
      </section>

      {selectedOption && (
        <section className="steps-section">
          <h2>Passo a Passo para Doação {selectedOption === 'site' ? 'pelo Site' : selectedOption === 'app' ? 'pelo App' : 'Fisicamente'}</h2>
          <ul>
            {steps[selectedOption].map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="form-section">
        <button className="add-box-button" onClick={() => setIsFormVisible(!isFormVisible)}>
          <FaPlusCircle size={20} /> Colocar Caixinha no Estabelecimento
        </button>

        {isFormVisible && (
          <form className="form-container">
            <label>
              Nome do Estabelecimento:
              <input type="text" name="nomeEstabelecimento" value={formData.nomeEstabelecimento} onChange={handleInputChange} />
            </label>
            <label>
              Razão Social:
              <input type="text" name="razaoSocial" value={formData.razaoSocial} onChange={handleInputChange} />
            </label>
            <label>
              Nome do Responsável:
              <input type="text" name="nomeResponsavel" value={formData.nomeResponsavel} onChange={handleInputChange} />
            </label>
            <label>
              Endereço:
              <input type="text" name="endereco" value={formData.endereco} onChange={handleInputChange} />
            </label>

            {formData.lojas.map((loja, index) => (
              <div key={index} className="store-details">
                <label>
                  Nome da Loja {index + 1}:
                  <input type="text" name="nome" value={loja.nome} onChange={(e) => handleInputChange(e, index)} />
                </label>
                <label>
                  Responsável da Loja {index + 1}:
                  <input type="text" name="responsavel" value={loja.responsavel} onChange={(e) => handleInputChange(e, index)} />
                </label>
              </div>
            ))}

            <button type="button" onClick={handleAddLoja} className="add-loja-button">
              Adicionar outra loja
            </button>

            <button type="submit" className="submit-button">Enviar</button>
          </form>
        )}
      </section>

      <section className="impact-section">
        <h2>O Impacto da Sua Doação</h2>
        <p>
          Sua contribuição ajuda a manter e expandir as atividades da Casa da Paz, beneficiando crianças e adolescentes e impactando positivamente a comunidade Vila Torres.
        </p>
      </section>
    </div>
  );
};

export default NotaParana;
