import React, { useState } from "react";
import "./DeliveryFormLayout.css";   // 👈 link the CSS file

function DeliveryFormLayout() {
  // -------------------------------
    // 1. State: added "errors" state
    // -------------------------------
    const [form, setForm] = useState({
      name: "",
      phonetic: "",
      zip: "",
      address: "",
      number: "",
      neighborhood: "",
      region: "",
      safety: "",
      city: "",
      state: "",
      phone: "",
      whatsapp: "",
      email: "",
      typePlace: "",
      deliveryTime: "",
      complement: "",
      observation: "",
    });

     const [showTooltip, setShowTooltip] = useState(false);
     const [tooltipMessage, setTooltipMessage] = useState("");
     const [images, setImages] = useState([]);
     const [darkMode, setDarkMode] = useState(false);


      // 👇 Add language state + translations dictionary here // LISTA
       const [language, setLanguage] = useState("en");

       const translations = {
         en: {
           buttons: {
             darkMode: "🌙 Dark Mode",
             lightMode: "☀️ Light Mode",
           },
           tips: [
             "💡 Please fill in all fields carefully*, including the non-mandatory ones.",
             "📍 Add the ZIP code first so the form autofills. You can also type and edit manually.",
             "📞 Use a valid phone number and email.",
             "🖼️ Upload clear images to help the delivery.",
             "📨 Please make sure all information is correct before submitting."
           ],
           labels: {
             name: "Full Name*",
             phonetic: "Phonetic",
             zip: "ZIP*",
             address: "Address*",
             number: "Number*",
             neighborhood: "Neighborhood*",
             region: "Region",
             safety: "Safety",
             city: "City*",
             state: "State*",
             phone: "Phone*",
             whatsapp: "WhatsApp*",
             email: "Email*",
             typePlace: "Type of Place",
             deliveryTime: "Delivery Time",
             complement: "Complement*",
             observation: "Observation",
             uploadImages: "Upload Images"
           },
           regionOptions: ["North", "South", "East", "West"],
           safetyOptions: ["Very", "Moderately", "Unsafe"],
           typePlaceOptions: ["House", "Apartment", "Condo", "Business"],
           deliveryTimeOptions: ["Morning", "Afternoon", "Evening", "Anytime"],
           tooltips: {
             nameInvalid: "Only letters, spaces, hyphens, and apostrophes are allowed.",
             zipDigitsOnly: "ZIP must contain only digits or one hyphen.",
             zipHyphen: "Only one hyphen is allowed in ZIP.",
             zipMaxDigits: "ZIP cannot exceed 8 digits.",
             zipMaxChars: "ZIP cannot exceed 9 characters.",
             zipFormat: "ZIP must be 12345678 or 12345-678.",
             addressInvalid: "Address can only contain letters (ABNT-2), numbers, spaces, and , . - '",
             addressNumberInvalid: "Please enter a valid address number.",
             numberInvalid: "Number field can only contain digits 0–9",
             cityInvalid: "City can only contain letters and spaces. Exception: Mãe d'Água.",
             phoneInvalid: "Only digits, +, (), and spaces allowed.",
             phoneMax: "Phone numbers cannot exceed 15 digits (E.164 standard).",
             phoneMin: "Phone number must have at least 8 digits (E.164 standard).",
             whatsappMin: "WhatsApp number must have at least 8 digits (E.164 standard).",
             phonePlus: "Only one '+' is allowed.",
             phoneParens: "Only one pair of parentheses is allowed.",
             whatsappInvalid: "WhatsApp must follow E.164 format (e.g. +5511912345678).",
             emailInvalidChars: "Only letters, digits, @, ., _, -, + allowed.",
             emailAt: "Only one '@' is allowed.",
             emailMax: "Email cannot exceed 254 characters.",
             emailFormat: "Please enter a valid email address.",
             emailDomain: "Could not verify the domain.",
             emailDomainSuccess: "Domain verified successfully!",
             emailDomainError: "Error verifying domain.",
             complementMax: "Complement cannot exceed 3000 characters.",
             complementTruncated: "Complement truncated to 100 characters.",
             imageFormatInvalid: "Only JPG, JPEG, PNG, HEIC, TIFF allowed.",
             requiredField: "Please fill the {field} field.",
            formSuccess: "Message sent successfully!"


           }
         },

         pt: {
           buttons: {
             darkMode: "🌙 Modo Escuro",
             lightMode: "☀️ Modo Claro",
           },
           tips: [
             "💡 Preencha todos os campos com atenção*, incluindo os não obrigatórios.",
             "📍 Insira o CEP para que o formulário seja preenchido automaticamente. Você também pode digitar e editar manualmente.",
             "📞 Use um telefone e e-mail válidos.",
             "🖼️ Envie imagens nítidas para ajudar na entrega.",
             "📨 Certifique-se de que todas as informações estão corretas antes de enviar."
           ],
           labels: {
             name: "Nome*",
             phonetic: "Pronúncia",
             zip: "CEP*",
             address: "Endereço*",
             number: "Número*",
             neighborhood: "Bairro*",
             region: "Região",
             safety: "Segurança",
             city: "Cidade*",
             state: "Estado*",
             phone: "Telefone*",
             whatsapp: "WhatsApp*",
             email: "E-mail*",
             typePlace: "Tipo de Local",
             deliveryTime: "Horário",
             complement: "Complemento*",
             observation: "Observação",
             uploadImages: "Imagens"
           },
           regionOptions: ["Norte", "Sul", "Leste", "Oeste"],
           safetyOptions: ["Alto", "Médio", "Baixo"],
           typePlaceOptions: ["Casa", "Apartamento", "Condomínio", "Comércio"],
           deliveryTimeOptions: ["Manhã", "Tarde", "Noite", "Qualquer horário"],
           tooltips: {
             nameInvalid: "Somente letras, espaços, hífens e apóstrofos são permitidos.",
             zipDigitsOnly: "O CEP deve conter apenas dígitos ou um hífen.",
             zipHyphen: "Somente um hífen é permitido no CEP.",
             zipMaxDigits: "O CEP não pode exceder 8 dígitos.",
             zipMaxChars: "O CEP não pode exceder 9 caracteres.",
             zipFormat: "O CEP deve ser 12345678 ou 12345-678.",
             addressInvalid: "O endereço pode conter apenas letras (ABNT-2), números, espaços e , . - '",
             addressNumberInvalid: "Por favor, insira um número de endereço válido.",
             numberInvalid: "O campo Número pode conter apenas dígitos de 0 a 9",
             cityInvalid: "A cidade pode conter apenas letras e espaços. Exceção: Mãe d'Água.",
             phoneInvalid: "Somente dígitos, +, (), e espaços são permitidos.",
             phoneMax: "Números de telefone não podem exceder 15 dígitos (padrão E.164).",
             phoneMin: "O telefone deve ter pelo menos 8 dígitos (padrão E.164).",
             whatsappMin: "O WhatsApp deve ter pelo menos 8 dígitos (padrão E.164).",
             phonePlus: "Somente um '+' é permitido.",
             phoneParens: "Somente um par de parênteses é permitido.",
             whatsappInvalid: "WhatsApp deve seguir o formato E.164 (ex.: +5511912345678).",
             emailInvalidChars: "Somente letras, dígitos, @, ., _, -, + são permitidos.",
             emailAt: "Somente um '@' é permitido.",
             emailMax: "O e-mail não pode exceder 254 caracteres.",
             emailFormat: "Por favor, insira um endereço de e-mail válido.",
             emailDomain: "Não doi possível verificar o domínio.",
             emailDomainSuccess: "Domínio verificado com sucesso.",
             emailDomainError: "Erro ao verificar o domínio.",
             complementMax: "O campo Complemento não pode exceder 3000 caracteres.",
             complementTruncated: "Complemento truncado para 100 caracteres.",
             imageFormatInvalid: "Somente JPG, JPEG, PNG, HEIC, TIFF são permitidos.",
             requiredField: "Por favor, preencha o campo {field}.",
            formSuccess: "Mensagem enviada com sucesso!"

           }
         }
       };


       // -------------------------------
         // 2. Required fields + validation
         // -------------------------------

         const requiredFields = [
           "name",
           "phone",
           "whatsapp",
           "email",
           "complement",
           "zip",
           "address",
           "neighborhood",
           "city",
           "state"
         ];

        const e164Regex = /^\+[1-9]\d{7,14}$/;
        // + followed by 8–15 digits (E.164 standard)

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const validateForm = async () => {
          // 1. Check required fields
         for (let field of requiredFields) {
           if (!form[field] || form[field].trim() === "") {
             const fieldLabel = translations[language].labels[field]; // localized label
             const messageTemplate = translations[language].tooltips.requiredField;
             const message = messageTemplate.replace("{field}", fieldLabel);

             setTooltipMessage(message);
             setShowTooltip(true);
             setTimeout(() => setShowTooltip(false), 3000);
             return false;
           }
         }


          // 2. Check phone and WhatsApp against E.164
          const normalizedPhone = form.phone.replace(/\s|\(|\)/g, "");
           if (!e164Regex.test(normalizedPhone)) {
             setTooltipMessage(translations[language].tooltips.phoneInvalid);
             setShowTooltip(true);
             setTimeout(() => setShowTooltip(false), 3000);
             return false;
           }


         const normalizedWhatsapp = form.whatsapp.replace(/\s|\(|\)/g, "");
           if (!e164Regex.test(normalizedWhatsapp)) {
             setTooltipMessage(translations[language].tooltips.whatsappInvalid);
             setShowTooltip(true);
             setTimeout(() => setShowTooltip(false), 3000);
             return false;
           }


          // ✅ Minimum length check
          const phoneDigits = form.phone.replace(/\D/g, "");
          if (phoneDigits.length < 8) {
            setTooltipMessage(translations[language].tooltips.phoneMin);
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 3000);
            return false;
          }

          const whatsappDigits = form.whatsapp.replace(/\D/g, "");
          if (whatsappDigits.length < 8) {
            setTooltipMessage(translations[language].tooltips.whatsappMin);
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 3000);
            return false;
          }


          // 3. Email validation
          if (!emailRegex.test(form.email)) {
             setTooltipMessage(translations[language].tooltips.emailFormat);
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 3000);
            return false;
          }

          // 4. Domain check
          const domain = form.email.split("@")[1];
          try {
            /*const res = await fetch(`/api/check-domain?domain=${domain}`);*/
            const res = await fetch(`/.netlify/functions/check-domain?domain=${domain}`);

            const data = await res.json();
            if (!data.valid) {
               setTooltipMessage(translations[language].tooltips.emailDomain);
              setShowTooltip(true);
              setTimeout(() => setShowTooltip(false), 3000);
              return false;
            }
          } catch (err) {
            console.error(err);
            setTooltipMessage(translations[language].tooltips.emailDomainError);
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 3000);
            return false;
          }

          // 5. Address number validation
          const numberRegex = /^[0-9]+$/; // only digits
          if (!numberRegex.test(form.number)) {
            setTooltipMessage(translations[language].tooltips.addressNumberInvalid);
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 3000);
            return false;
          }


          return true; // ✅ Passed all checks
        };

       const handleSubmit = async (e) => {
         e.preventDefault();
         const ok = await validateForm();
         if (!ok) return;

         /*console.log("Form submitted:", form);*/

         await fetch("/api/submitForm", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify(form),
         });


         // ✅ Show success tooltip
         setTooltipMessage(translations[language].tooltips.formSuccess);
         setShowTooltip(true);
         setTimeout(() => setShowTooltip(false), 3000);

         // ✅ Clear form fields
           setForm({
             name: "",
             phonetic: "",
             zip: "",
             address: "",
             number: "",
             city: "",
             complement: "",
             deliveryTime: "",
             email: "",
             neighborhood: "",
             observation: "",
             phone: "",
             region: "",
             safety: "",
             state: "",
             typePlace: "",
             whatsapp: ""
           });
         };














     //handlers start here


       // 👇 Generic change handler
       const handleChange = (e) => {
         const { name, value } = e.target;
         setForm((prevForm) => ({
           ...prevForm,
           [name]: value,
         }));
       };

//name part

   // 👇 Block invalid characters before they appear (typing)
   const handleBeforeInputName = (e) => {
     const char = e.data; // character user is trying to type
     const nameRegex = /^[\p{L}\p{M}\s'-]$/u; // single char check

     if (char && !nameRegex.test(char)) {
       e.preventDefault(); // block typing
        setTooltipMessage(translations[language].tooltips.nameInvalid);
       setShowTooltip(true);
       setTimeout(() => setShowTooltip(false), 2000);
     }
   };

   // 👇 Clean pasted text before saving
   const handlePasteName = (e) => {
     e.preventDefault();
     const pasted = e.clipboardData.getData("text");

     // Keep only allowed characters
     const allowedRegex = /[\p{L}\p{M}\s'-]/gu;
     const cleaned = pasted.match(allowedRegex)?.join("") || "";

     setForm({ ...form, name: cleaned });

     // If something was removed, show tooltip
     if (cleaned !== pasted) {
       setTooltipMessage(translations[language].tooltips.nameInvalid);
       setShowTooltip(true);
       setTimeout(() => setShowTooltip(false), 2000);
     }
   };

/*ZIP PART*/

  // 👇 ZIP input restrictions (typing)
   const handleBeforeInputZip = (e) => {
     const char = e.data;
     const currentValue = form.zip ?? "";
     const allowedRegex = /^[0-9-]$/;

     if (char && !allowedRegex.test(char)) {
       e.preventDefault();
       setTooltipMessage(translations[language].tooltips.zipDigitsOnly);
       setShowTooltip(true);
       setTimeout(() => setShowTooltip(false), 2000);
       return;
     }

     const hyphens = (currentValue.match(/-/g) || []).length;
     const digits = currentValue.replace(/-/g, "");

     if (char === "-" && hyphens >= 1) {
       e.preventDefault();
       setTooltipMessage(translations[language].tooltips.zipHyphen);
       setShowTooltip(true);
       setTimeout(() => setShowTooltip(false), 2000);
       return;
     }

     if (digits.length >= 8 && char !== "-") {
       e.preventDefault();
        setTooltipMessage(translations[language].tooltips.zipMaxDigits);
       setShowTooltip(true);
       setTimeout(() => setShowTooltip(false), 2000);
       return;
     }

     if (currentValue.length >= 9) {
       e.preventDefault();
       setTooltipMessage(translations[language].tooltips.zipMaxChars);
       setShowTooltip(true);
       setTimeout(() => setShowTooltip(false), 2000);
     }
   };

   // 👇 ZIP validation (used on blur or after paste)
   const validateZip = (value) => {
     if (!value) return;

     const hyphens = (value.match(/-/g) || []).length;
     const digits = value.replace(/-/g, "");

     const ok =
       /^\d{8}$/.test(value) ||
       (hyphens === 1 && digits.length === 8 && value.length === 9);

     if (!ok) {
       setTooltipMessage(translations[language].tooltips.zipFormat);
       setShowTooltip(true);
       setTimeout(() => setShowTooltip(false), 2000);
     }
   };

/*new zip change handler autofill*/

/// 👇 ZIP auto-fill handler (typing)
 const handleZipChange = async (e) => {
   let rawZip = e.target.value;

   // Allow only digits and one hyphen
   rawZip = rawZip.replace(/[^0-9-]/g, "");
   const hyphens = (rawZip.match(/-/g) || []).length;
   if (hyphens > 1) {
     setTooltipMessage(translations[language].tooltips.zipHyphen);
     setShowTooltip(true);
     setTimeout(() => setShowTooltip(false), 2000);
     return;
   }

   setForm((prev) => ({ ...prev, zip: rawZip }));

   // Clean version for API (remove hyphen)
   const cleanZip = rawZip.replace("-", "");

   // If ZIP has 8 digits, fetch immediately
   if (cleanZip.length === 8) {
     try {
       const response = await fetch(`https://viacep.com.br/ws/${cleanZip}/json/`);
       const data = await response.json();

       if (!data.erro) {
         setForm((prev) => ({
           ...prev,
           address: data.logradouro || "",
           neighborhood: data.bairro || "",
           city: data.localidade || "",
           state: data.uf || ""
         }));
       }
     } catch (error) {
       console.error("ZIP lookup failed", error);
     }
   }
 };

 // 👇 ZIP paste handler with auto-fill
 const handlePasteZip = async (e) => {
   e.preventDefault();
   const pasted = e.clipboardData.getData("text");

   // Allow only digits and one hyphen
   let rawZip = pasted.replace(/[^0-9-]/g, "");
   const hyphens = (rawZip.match(/-/g) || []).length;
   if (hyphens > 1) {
      setTooltipMessage(translations[language].tooltips.zipHyphen);
     setShowTooltip(true);
     setTimeout(() => setShowTooltip(false), 2000);
     return;
   }

   setForm((prevForm) => ({ ...prevForm, zip: rawZip }));

   // Clean version for API (remove hyphen)
   const cleanZip = rawZip.replace("-", "");

   // If ZIP has 8 digits, fetch immediately
   if (cleanZip.length === 8) {
     try {
       const response = await fetch(`https://viacep.com.br/ws/${cleanZip}/json/`);
       const data = await response.json();

       if (!data.erro) {
         setForm((prev) => ({
           ...prev,
           address: data.logradouro || "",
           neighborhood: data.bairro || "",
           city: data.localidade || "",
           state: data.uf || ""
         }));
       }
     } catch (error) {
       console.error("ZIP lookup failed", error);
     }
   } else {
     validateZip(rawZip); // fallback validation
   }
 };


/*address PART*/

// Restrict characters while typing
const handleBeforeInputAddress = (e) => {
  const char = e.data;
  if (!char) return;

  // Regex for Brazilian alphabet + numbers + allowed symbols (no slash, allow apostrophe)
  const allowedRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9\s.,'-]$/;


  if (!allowedRegex.test(char)) {
    e.preventDefault();
   setTooltipMessage(translations[language].tooltips.addressInvalid);

    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }
};

// 👇 Clean pasted Address before saving
const handlePasteAddress = (e) => {
  e.preventDefault();
  const pasted = e.clipboardData.getData("text");

  // Allowed: Brazilian alphabet + numbers + spaces + , . - '
  const allowedRegex = /[a-zA-ZÀ-ÖØ-öø-ÿ0-9\s.,'-]/g;
  const cleaned = pasted.match(allowedRegex)?.join("") || "";

  setForm((prevForm) => ({ ...prevForm, address: cleaned }));

  if (cleaned !== pasted) {
    setTooltipMessage(translations[language].tooltips.addressInvalid);

    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }
};


/*NUMBER PART*/

const handleBeforeInputNumber = (e) => {
  const char = e.data;
  if (!char) return;

  const allowedRegex = /^[0-9]$/;

  if (!allowedRegex.test(char)) {
    e.preventDefault();
    setTooltipMessage(translations[language].tooltips.numberInvalid);

    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }
};

// 👇 Clean pasted Number before saving
const handlePasteNumber = (e) => {
  e.preventDefault();
  const pasted = e.clipboardData.getData("text");

  // Allowed: digits only
  const allowedRegex = /[0-9]/g;
  const cleaned = pasted.match(allowedRegex)?.join("") || "";

  setForm((prevForm) => ({ ...prevForm, number: cleaned }));

  if (cleaned !== pasted) {
    setTooltipMessage(translations[language].tooltips.numberInvalid);

    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }
};

//NEIGHBORHOOD PART

// 👇 Bloqueia caracteres inválidos na digitação
const handleBeforeInputNeighborhood = (e) => {
  const char = e.data;
  // Letras (com acentos), números, espaços, hífen e apóstrofo
  const neighborhoodRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9\s.'-]$/;

  if (char && !neighborhoodRegex.test(char)) {
    e.preventDefault();
     setTooltipMessage(translations[language].tooltips.nameInvalid);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }
};

// 👇 Limpa texto colado antes de salvar
const handlePasteNeighborhood = (e) => {
  e.preventDefault();
  const pasted = e.clipboardData.getData("text");

  // Mantém apenas os caracteres permitidos
  const allowedRegex = /[a-zA-ZÀ-ÖØ-öø-ÿ0-9\s'-]/g;
  const cleaned = pasted.match(allowedRegex)?.join("") || "";

  setForm((prevForm) => ({ ...prevForm, neighborhood: cleaned }));

  if (cleaned !== pasted) {
    setTooltipMessage(translations[language].tooltips.nameInvalid);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }
};


//city part REVER Mãe d'Água QUANDO DIGITA

// 👇 Block invalid characters before they appear (typing)
const handleBeforeInputCity = (e) => {
  const char = e.data;
  const currentValue = form.city ?? "";

  // Allowed: Brazilian alphabet letters + spaces
  const cityRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]$/;

  // Special case: allow apostrophe only in "Mãe d'Água"
  const specialCase = currentValue + char === "Mãe d'Água";

  if (char && !cityRegex.test(char) && !specialCase) {
    e.preventDefault();
    setTooltipMessage(translations[language].tooltips.cityInvalid);

    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }
};

// 👇 Clean pasted text before saving
const handlePasteCity = (e) => {
  e.preventDefault();
  const pasted = e.clipboardData.getData("text");

  // Keep only letters and spaces
  const allowedRegex = /[a-zA-ZÀ-ÖØ-öø-ÿ\s]/g;
  let cleaned = pasted.match(allowedRegex)?.join("") || "";

  // Special exception: allow "Mãe d'Água"
  if (pasted.trim() === "Mãe d'Água") {
    cleaned = "Mãe d'Água";
  }

  setForm((prevForm) => ({ ...prevForm, city: cleaned }));

  if (cleaned !== pasted) {
    setTooltipMessage(translations[language].tooltips.cityInvalid);

    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }
};


//PHONE PART

const handleBeforeInputPhone = (e) => {
  const char = e.data;
  const v = form.phone ?? "";

  // Allow only digits, +, (), and spaces
  const allowedRegex = /^[0-9()+\s]$/;
  if (char && !allowedRegex.test(char)) {
    e.preventDefault();
    setTooltipMessage(translations[language].tooltips.phoneInvalid);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
    return;
  }

  // ✅ Enforce max 15 digits (E.164 standard)
  const digitsOnly = (v + (char || "")).replace(/\D/g, "");
  if (digitsOnly.length > 15) {
    e.preventDefault();
     setTooltipMessage(translations[language].tooltips.phoneMax);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
    return;
  }

  // Only one '+'
  if (char === "+" && v.includes("+")) {
    e.preventDefault();

 setTooltipMessage(translations[language].tooltips.phonePlus);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
    return;
  }

  // Only one pair of parentheses
  const openParens = (v.match(/\(/g) || []).length;
  const closeParens = (v.match(/\)/g) || []).length;
  if ((char === "(" && openParens >= 1) || (char === ")" && closeParens >= 1)) {
    e.preventDefault();
    setTooltipMessage(translations[language].tooltips.phoneParens);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }
};

const handlePastePhone = (e) => {
  e.preventDefault();
  const pasted = e.clipboardData.getData("text");
  let digits = pasted.replace(/\D/g, ""); // use let so we can truncate

  // ✅ Truncate to max 15 digits
  if (digits.length > 15) {
    digits = digits.slice(0, 15);
     setTooltipMessage(translations[language].tooltips.phoneMax);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }

  let formatted = pasted;

  if (digits.length > 0) {
    let cc = "";
    let area = "";
    let rest = "";

    if (digits.startsWith("55")) {
      cc = "+55";
      area = digits.slice(2,4); // Brazil area code = 2 digits
      rest = digits.slice(4);
    } else if (digits.startsWith("1")) {
      cc = "+1";
      area = digits.slice(1,4); // US area code = 3 digits
      rest = digits.slice(4);
    } else if (digits.startsWith("44")) {
      cc = "+44";
      area = digits.slice(2,5); // UK area code = 3 digits
      rest = digits.slice(5);
    } else {
      cc = `+${digits.slice(0,2)}`;
      area = digits.slice(2,4);
      rest = digits.slice(4);
    }

    formatted = `${cc} (${area}) ${rest}`;
  }

  setForm((prev) => ({ ...prev, phone: formatted }));

  if (formatted !== pasted) {
    setTooltipMessage("Phone number auto-formatted.");
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }
};


//WHATSAPP PART

const handleBeforeInputWhatsapp = (e) => {
  const char = e.data;
  const v = form.whatsapp ?? "";

  // Allow only digits, +, (), and spaces
  const allowedRegex = /^[0-9()+\s]$/;
  if (char && !allowedRegex.test(char)) {
    e.preventDefault();
    setTooltipMessage(translations[language].tooltips.phoneInvalid); /*?? mudar*/
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
    return;
  }

  // ✅ Enforce max 15 digits (E.164 standard)
  const digitsOnly = (v + (char || "")).replace(/\D/g, "");
  if (digitsOnly.length > 15) {
    e.preventDefault();
    setTooltipMessage(translations[language].tooltips.whatsappInvalid);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
    return;
  }

  // Only one '+'
  if (char === "+" && v.includes("+")) {
    e.preventDefault();
    setTooltipMessage(translations[language].tooltips.phonePlus);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
    return;
  }

  // Only one pair of parentheses
  const openParens = (v.match(/\(/g) || []).length;
  const closeParens = (v.match(/\)/g) || []).length;
  if ((char === "(" && openParens >= 1) || (char === ")" && closeParens >= 1)) {
    e.preventDefault();
     setTooltipMessage(translations[language].tooltips.phoneParens);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }
};

const handlePasteWhatsapp = (e) => {
  e.preventDefault();
  const pasted = e.clipboardData.getData("text");
  let digits = pasted.replace(/\D/g, "");

  // ✅ Truncate to max 15 digits
  if (digits.length > 15) {
    digits = digits.slice(0, 15);
     setTooltipMessage(translations[language].tooltips.phoneMax); /*mudar??*/
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }

  let formatted = pasted;

  if (digits.length > 0) {
    let cc = "";
    let area = "";
    let rest = "";

    if (digits.startsWith("55")) {
      cc = "+55";
      area = digits.slice(2,4); // Brazil area code = 2 digits
      rest = digits.slice(4);
    } else if (digits.startsWith("1")) {
      cc = "+1";
      area = digits.slice(1,4); // US area code = 3 digits
      rest = digits.slice(4);
    } else if (digits.startsWith("44")) {
      cc = "+44";
      area = digits.slice(2,5); // UK area code = 3 digits
      rest = digits.slice(5);
    } else {
      cc = `+${digits.slice(0,2)}`;
      area = digits.slice(2,4);
      rest = digits.slice(4);
    }

    formatted = `${cc} (${area}) ${rest}`;
  }

  setForm((prev) => ({ ...prev, whatsapp: formatted }));

  if (formatted !== pasted) {
    setTooltipMessage("WhatsApp number auto-formatted.");
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }
};

const formatPhoneNumber = (value) => {
  let digits = value.replace(/\D/g, "");
  if (digits.length > 15) digits = digits.slice(0, 15);

  if (digits.length === 0) return "";

  let cc = "";
  let area = "";
  let rest = "";

  if (digits.startsWith("55")) {
    cc = "+55";
    area = digits.slice(2,4);
    rest = digits.slice(4);
  } else if (digits.startsWith("1")) {
    cc = "+1";
    area = digits.slice(1,4);
    rest = digits.slice(4);
  } else if (digits.startsWith("44")) {
    cc = "+44";
    area = digits.slice(2,5);
    rest = digits.slice(5);
  } else {
    cc = `+${digits.slice(0,2)}`;
    area = digits.slice(2,4);
    rest = digits.slice(4);
  }

  return `${cc} (${area}) ${rest}`;
};

const handleBlurPhone = () => {
  setForm((prev) => ({ ...prev, phone: formatPhoneNumber(prev.phone) }));
};

const handleBlurWhatsapp = () => {
  setForm((prev) => ({ ...prev, whatsapp: formatPhoneNumber(prev.whatsapp) }));
};

//EMAIL PART


const handleBeforeInputEmail = (e) => {
  const char = e.data;
  const v = form.email ?? "";

  // Allowed characters: letters, digits, @ . _ - +
  const allowedRegex = /^[a-zA-Z0-9@._+-]$/;
  if (char && !allowedRegex.test(char)) {
    e.preventDefault();
     setTooltipMessage(translations[language].tooltips.emailInvalidChars);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
    return;
  }

  // Only one '@'
  if (char === "@" && v.includes("@")) {
    e.preventDefault();
    setTooltipMessage(translations[language].tooltips.emailAt);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
    return;
  }

  // Max length 254
  if ((v + (char || "")).length > 254) {
    e.preventDefault();
     setTooltipMessage(translations[language].tooltips.emailMax);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }
};

const handlePasteEmail = (e) => {
  e.preventDefault();
  const pasted = e.clipboardData.getData("text");

  // Strip invalid characters
  let sanitized = pasted.replace(/[^a-zA-Z0-9@._+-]/g, "");

  // Truncate to 254 chars
  if (sanitized.length > 254) {
    sanitized = sanitized.slice(0, 254);
    setTooltipMessage(translations[language].tooltips.emailMax);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }

  // Ensure only one '@'
  const parts = sanitized.split("@");
  if (parts.length > 2) {
    sanitized = parts[0] + "@" + parts.slice(1).join("").replace(/@/g, "");
    setTooltipMessage("Multiple '@' removed.");
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }

  setForm((prev) => ({ ...prev, email: sanitized }));
};

const handleBlurEmail = async () => {
  const email = (form.email ?? "").trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Step 1: Basic format check
  if (!emailRegex.test(email)) {
    setTooltipMessage(translations[language].tooltips.emailFormat);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
    return;
  }

  // Step 2: Extract domain
  const domain = email.split("@")[1];

  try {
    /*const res = await fetch(`/api/check-domain?domain=${domain}`);*/
    const res = await fetch(`/.netlify/functions/check-domain?domain=${domain}`);

    const data = await res.json();

    console.log("Domain check result:", data); // ✅ Debugging line

    // Step 3: Handle backend response
    if (!data.valid) {
      // ❌ Domain failed validation
      setTooltipMessage(
        data.reason
          ? `${translations[language].tooltips.emailDomain} (${data.reason})`
          : translations[language].tooltips.emailDomain
      );
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    } else {
      // ✅ Domain passed validation
      setTooltipMessage(translations[language].tooltips.emailDomainSuccess || "Domain verified successfully!");
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    }
  } catch (err) {
    console.error(err);
    setTooltipMessage(translations[language].tooltips.emailDomainError);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }
};



//complement part

const handleBeforeInputComplement = (e) => {
  const char = e.data;
  const v = form.complement ?? "";

  // Allowed: letters (including accents), digits, space, comma, dot
  const allowedRegex = /^[a-zA-Z0-9À-ÖØ-öø-ÿçÇ\s,.]$/;

  if (char && !allowedRegex.test(char)) {
    e.preventDefault();
    setTooltipMessage(translations[language].tooltips.nameInvalid);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
    return;
  }

  // Optional: max length (e.g., 100 chars)
  if ((v + (char || "")).length > 3000) {
    e.preventDefault();
    setTooltipMessage(translations[language].tooltips.complementMax);

    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }
};

const handlePasteComplement = (e) => {
  e.preventDefault();
  const pasted = e.clipboardData.getData("text");

  // Strip invalid characters
  let sanitized = pasted.replace(/[^a-zA-Z0-9À-ÖØ-öø-ÿçÇ\s,.]/g, "");

  // Truncate to 100 chars
  if (sanitized.length > 3000) {
    sanitized = sanitized.slice(0, 3000);
    setTooltipMessage(translations[language].tooltips.complementTruncated);

    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }

  setForm((prev) => ({ ...prev, complement: sanitized }));
};

//observation part

const handleBeforeInputObservation = (e) => {
  const char = e.data;
  const v = form.observation ?? "";

  // Allowed: letters (including accents), digits, space, comma, dot
  const allowedRegex = /^[a-zA-Z0-9À-ÖØ-öø-ÿçÇ\s,.]$/;

  if (char && !allowedRegex.test(char)) {
    e.preventDefault();
   setTooltipMessage(translations[language].tooltips.nameInvalid);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
    return;
  }

  // Optional: max length (e.g., 200 chars)
  if ((v + (char || "")).length > 3000) {
    e.preventDefault();
    setTooltipMessage("Observation cannot exceed 200 characters."); /*MUDAR??*/
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }
};

const handlePasteObservation = (e) => {
  e.preventDefault();
  const pasted = e.clipboardData.getData("text");

  // Strip invalid characters
  let sanitized = pasted.replace(/[^a-zA-Z0-9À-ÖØ-öø-ÿçÇ\s,.]/g, "");

  // Truncate to 200 chars
  if (sanitized.length > 3000) {
    sanitized = sanitized.slice(0, 3000);
    setTooltipMessage("Observation truncated to 200 characters.");/*MUDAR??*/
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }

  setForm((prev) => ({ ...prev, observation: sanitized }));
};

//image upload

const handleImageUpload = (e) => {
  const files = Array.from(e.target.files);

  // Allowed formats
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/heic", "image/tiff"];

  // Filter valid files
  const validFiles = files.filter(file => allowedTypes.includes(file.type));

  if (validFiles.length !== files.length) {
    setTooltipMessage(translations[language].tooltips.imageFormatInvalid);

    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }

  // Limit to 5 images
  const newImages = [...images, ...validFiles].slice(0, 5);
  setImages(newImages);
};

const handleDeleteImage = (index) => {
  const updated = images.filter((_, i) => i !== index);
  setImages(updated);
};

// Drag & Drop
const handleDrop = (e) => {
  e.preventDefault();
  const files = Array.from(e.dataTransfer.files);
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/heic", "image/tiff"];
  const validFiles = files.filter(file => allowedTypes.includes(file.type));
  const newImages = [...images, ...validFiles].slice(0, 5);
  setImages(newImages);
};

const handleDragOver = (e) => {
  e.preventDefault();
};

/*SEPARATION*/

     return (
          <div className={`app-container ${darkMode ? "dark" : ""}`}>
             <form className="delivery-form">
               {/* Tooltip at the top */}
               {showTooltip && (
                 <div className="tooltip-global">
                   {tooltipMessage}
                 </div>
               )}

               {/* Translation + Dark Mode buttons */}
               <div className="button-row">
                 <button
                   type="button"
                   onClick={() => setLanguage(language === "en" ? "pt" : "en")}
                   className="button translate-btn"
                 >
                   {language === "en" ? "Traduzir para Português" : "Translate to English"}
                 </button>

                 <button
                   type="button"
                   onClick={() => setDarkMode(!darkMode)}
                   className="button darkmode-btn"
                 >
                   {darkMode
                     ? translations[language].buttons.lightMode
                     : translations[language].buttons.darkMode}
                 </button>
               </div>


               {/* Tips box */}
               <div className="form-tips">
                 {translations[language].tips.map((tip, index) => (
                   <p key={index}>{tip}</p>
                 ))}
               </div>


         <h2>Delivery Form</h2>

       <div className="form-row">
         <label>{translations[language].labels.name}:</label>
         <input
           type="text"
           name="name"
           value={form.name}
           onChange={handleChange}
           onBeforeInput={handleBeforeInputName}
           onPaste={handlePasteName}
           placeholder={
                                         language === "en"
                                         ? "Full name, ex: João da Silva, Александр Иванов, Raphaël D’aureville or etc."
                                         : "Nome completo, ex: João da Silva, Александр Иванов, Raphaël D’aureville ou etc."
                                         }
         />
       </div>


<div className="form-row">
  <label>{translations[language].labels.phonetic}:</label>
  <input
    type="text"
    name="phonetic"
    value={form.phonetic}
    onChange={handleChange}
    onBeforeInput={handleBeforeInputName}
    onPaste={handlePasteName}
    placeholder="Ex: Александр Иванов = Aleksandr Ivanov = ah-lekh-SAHNDR ee-vah-NOFF"
  />
</div>

  <div className="form-row">
    <label>{translations[language].labels.zip}:</label>
    <input
      type="text"
      name="zip"
      value={form.zip}
      onChange={handleZipChange}
      onBeforeInput={handleBeforeInputZip}
      onPaste={handlePasteZip}
      onBlur={(e) => validateZip(e.target.value)}
      placeholder={
                              language === "en"
                              ? "Ex: 12345678 or 12345-678"
                              : "Ex: 12345678 ou 12345-678"
                              }

          />

       <label style={{ marginLeft: "10px" }}>
           {translations[language].labels.region}:
         </label>
         <select
           name="region"
           value={form.region}
           onChange={handleChange}
         >
           {/* 👇 placeholder option also translated */}
           <option value="" disabled hidden>
             {language === "en" ? "Select Region" : "Selecione a Região"}
           </option>

           {/* 👇 map through translated options */}
           {translations[language].regionOptions.map((opt, index) => (
             <option key={index} value={opt.toLowerCase()}>
               {opt}
             </option>
           ))}
         </select>
       </div>


    <div className="form-row">
      <label>{translations[language].labels.address}:</label>
      <input
         type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            onBeforeInput={handleBeforeInputAddress}
            onPaste={handlePasteAddress}
             placeholder={
                        language === "en"
                        ? "Ex: Rua São João, 123-A, L'Av. Paulista or etc."
                        : "Ex: Rua São João, 123-A, L'Av. Paulista ou etc."
                        }
      />

      <label style={{ marginLeft: "10px" }}>{translations[language].labels.number}:</label>
        <input
          type="text" /*??? PRECISA??*/
          name="number"
          value={form.number}
          onChange={handleChange}
          onBeforeInput={handleBeforeInputNumber}
          onPaste={handlePasteNumber}
          placeholder="Ex: 123"
        />
     </div>



     <div className="form-row">
        <label>{translations[language].labels.neighborhood}:</label>
         <input
           type="text"
           name="neighborhood"
           value={form.neighborhood}
           onChange={handleChange}
           onBeforeInput={handleBeforeInputNeighborhood}
           onPaste={handlePasteNeighborhood}
           style={{ flex: 1 }}
           placeholder={
            language === "en"
            ? "Neighborhood's name, ex: Jardim Botânico"
            : "Nome do bairro, ex: Jardim Botânico"
            }


       />

        <label style={{ marginLeft: "10px" }}>
            {translations[language].labels.safety}:
          </label>
          <select
            name="safety"
            value={form.safety}
            onChange={handleChange}
            style={{ width: "140px" }}
          >
            {/* 👇 placeholder option translated */}
            <option value="" disabled hidden>
              {language === "en" ? "Select" : "Selecione"}
            </option>

            {/* 👇 map through translated safety options */}
            {translations[language].safetyOptions.map((opt, index) => (
              <option key={index} value={opt.toLowerCase()}>
                {opt}
              </option>
            ))}
          </select>
        </div>

      <div className="form-row">
       <label>{translations[language].labels.city}:</label>
         <input
           type="text"
           name="city"
           value={form.city}
           onChange={handleChange}
           onBeforeInput={handleBeforeInputCity}
           onPaste={handlePasteCity}
           style={{ flex: 1 }}
           placeholder={

                                   language === "en"
                                   ? "City's name, ex: Paraná, Rio de Janeiro or etc."
                                   : "Nome da cidade, ex: Paraná, Rio de Janeiro ou etc."
                                   }
        />

         <label style={{ marginLeft: "10px" }}>
           {translations[language].labels.state}:
         </label>
         <select
           name="state"
           value={form.state}
           onChange={handleChange}
           style={{ width: "160px" }}
         >
           {/* 👇 placeholder option translated */}
           <option value="" disabled hidden>
             {language === "en" ? "Select State" : "Selecione o Estado"}
           </option>

          <option value="AC">(AC) Acre</option>
          <option value="AL">(AL) Alagoas</option>
          <option value="AP">(AP) Amapá </option>
          <option value="AM">(AM) Amazonas </option>
          <option value="BA">(BA) Bahia</option>
          <option value="CE">(CE) Ceará </option>
          <option value="DF">(DF) Distrito Federal</option>
          <option value="ES">(ES) Espírito Santo</option>
          <option value="GO">(GO) Goiás</option>
          <option value="MA">(MA) Maranhão </option>
          <option value="MT">(MT) Mato Grosso </option>
          <option value="MS">(MS) Mato Grosso do Sul</option>
          <option value="MG">(MG) Minas Gerais </option>
          <option value="PA">(PA) Pará </option>
          <option value="PB">(PB) Paraíba  </option>
          <option value="PR">(PR) Paraná  </option>
          <option value="MA">(MA) Pernambuco </option>
          <option value="PI">(PI) Piauí </option>
          <option value="RJ">(RJ) Rio de Janeiro </option>
          <option value="RN">(RN) Rio Grande do Norte </option>
          <option value="RS">(RS) Rio Grande do Sul </option>
          <option value="RO">(RO) Rondônia  </option>
          <option value="RR">(RR) Roraima </option>
          <option value="SC">(SC) Santa Catarina </option>
          <option value="SP">(SP) São Paulo </option>
          <option value="SE">(SE) Sergipe </option>
          <option value="TO">(TO) Tocantins </option>
        </select>
      </div>


    <div className="form-row">
     <label>{translations[language].labels.phone}:</label>
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        onBeforeInput={handleBeforeInputPhone}
        onPaste={handlePastePhone}
         onBlur={handleBlurPhone}
          placeholder="+55 (21) 12345678"
    />


     <label style={{ marginLeft: "10px" }}>{translations[language].labels.whatsapp}:</label>
      <input
        name="whatsapp"
        value={form.whatsapp}
        onChange={handleChange}
        onBeforeInput={handleBeforeInputWhatsapp}
        onPaste={handlePasteWhatsapp}
        onBlur={handleBlurWhatsapp}
        placeholder="+55 (21) 987654321"
      />
      </div>


   <div className="form-row">
      <label>{translations[language].labels.email}:</label>
     <input
       name="email"
       value={form.email}
       onChange={handleChange}
       onBeforeInput={handleBeforeInputEmail}
       onPaste={handlePasteEmail}
       onBlur={handleBlurEmail}
       placeholder={
                                               language === "en"
                                               ? "A valid e-mail, ex: @gmail.com, @hotmail.com.br, @yahoo.co.jp, @proton.me, @fundacao.org or etc."
                        : "E-mail válido, ex: @gmail.com, @hotmail.com.br, @yahoo.co.jp, @proton.me, @fundacao.org ou etc."
            }


     />
   </div>

      <div className="form-row">
        <label style={{ marginLeft: "0px" }}>
          {translations[language].labels.typePlace}:
        </label>
        <select
          name="typePlace"
          value={form.typePlace}
          onChange={handleChange}
          style={{ flex: 1 }}
        >
          {/* 👇 placeholder option translated */}
          <option value="" disabled hidden>
            {language === "en" ? "Select" : "Selecione"}
          </option>

          {/* 👇 map through translated typePlace options */}
          {translations[language].typePlaceOptions.map((opt, index) => (
            <option key={index} value={opt.toLowerCase()}>
              {opt}
            </option>
          ))}
        </select>

          <label style={{ marginLeft: "10px" }}>
            {translations[language].labels.deliveryTime}:
          </label>
          <select
            name="deliveryTime"
            value={form.deliveryTime}
            onChange={handleChange}
            style={{ flex: 1 }}
          >
            {/* 👇 placeholder option translated */}
            <option value="" disabled hidden>
              {language === "en" ? "Select" : "Selecione"}
            </option>

            {/* 👇 map through translated delivery time options */}
            {translations[language].deliveryTimeOptions?.map((opt, index) => (
              <option key={index} value={opt.toLowerCase()}>
                {opt}
              </option>
            ))}
          </select>
        </div>



     <div className="form-row">
        <label>{translations[language].labels.complement}:</label>
       <textarea
         name="complement"
         value={form.complement}
         onChange={handleChange}
         onBeforeInput={handleBeforeInputComplement}
         onPaste={handlePasteComplement}
         placeholder={
               language === "en"
                 ? "Complement (letters, numbers, space, comma, dot), ex: Entrance on the side street; Back house; Building 3-C, apartment 1204 or etc."
                 : "Complemento (letras, números, espaço, vírgula, ponto), ex: Entrada pela rua lateral; Casa dos fundos; Edifício 3-C, apartamento 1204 ou etc."
             }

       />
     </div>


      <div className="form-row">
         <label>{translations[language].labels.observation}:</label>
        <textarea
          name="observation"
          value={form.observation}
          onChange={handleChange}
          onBeforeInput={handleBeforeInputObservation}
          onPaste={handlePasteObservation}
          placeholder={
                language === "en"
                  ? "Observation (letters, numbers, space, comma, dot), ex: Blue gate, second floor; Please call when you arrive; Leave the package with the doorman or etc."
                  : "Observação (letras, números, espaço, vírgula, ponto), ex: Portão azul, segundo andar; Por favor, ligue quando chegar; Deixe o pacote com o porteiro."
              }

        />
      </div>

      <div className="form-row">
        <label style={{ marginLeft: "0px" }}>
            {translations[language].labels.uploadImages}:
          </label>
          <div
            className="upload-area"
            onDrop={handleDrop}
            onDragOver={handleDragOver}

        >
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.heic,.tiff"
            multiple
            onChange={handleImageUpload}
          />
          <p>Drag & drop or select up to 5 images</p>
        </div>

        <div className="image-preview-row">
          {images.map((file, index) => (
            <div key={index} className="image-preview">
              <img
                src={URL.createObjectURL(file)}
                alt={`preview-${index}`}
                width={80}
                height={80}
              />
              <button type="button" onClick={() => handleDeleteImage(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
        </div>
        <div className="form-row submit-row">
          <button type="submit" className="button" onClick={handleSubmit}>
            {language === "en" ? "Submit" : "Enviar"}
          </button>

        </div>


    </form>
    </div>
  );
}

export default DeliveryFormLayout;
