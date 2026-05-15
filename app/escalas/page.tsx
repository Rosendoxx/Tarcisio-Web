"use client";

import { useState } from "react";

const MONTH_NAMES = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];

export default function EscalasPage() {
    const [month, setMonth] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const monthNumber = month !== "" ? Number(month) : null;
    const isValid = monthNumber !== null && monthNumber >= 1 && monthNumber <= 12;

    async function handleGenerate() {
        if (!isValid) {
            setError("Informe um número de mês válido (1–12).");
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch(`/api-backend/escalas/excel/${monthNumber}`);

            if (!response.ok) {
                throw new Error(`Erro do servidor: ${response.status}`);
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `escala_${MONTH_NAMES[monthNumber! - 1]}.xlsx`;
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);

            setSuccess(true);
        } catch (err: unknown) {
            const message =
                err instanceof Error ? err.message : "Erro ao gerar o arquivo.";
            setError(message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="escalas-page">
            <div className="escalas-card">
                {/* Icon */}
                <div className="escalas-icon">
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                    </svg>
                </div>

                <h1 className="escalas-title">Gerar Escala em Excel</h1>
                <p className="escalas-subtitle">
                    Informe o número do mês para gerar a planilha de escalas
                    automaticamente.
                </p>

                {/* Month input */}
                <div className="escalas-field">
                    <label htmlFor="month-input" className="escalas-label">
                        Mês (1–12)
                    </label>
                    <input
                        id="month-input"
                        type="number"
                        min={1}
                        max={12}
                        placeholder="Ex: 6"
                        value={month}
                        onChange={(e) => {
                            setMonth(e.target.value);
                            setError(null);
                            setSuccess(false);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleGenerate();
                        }}
                        className="escalas-input"
                    />
                    {isValid && (
                        <span className="escalas-month-badge">
                            {MONTH_NAMES[monthNumber! - 1]}
                        </span>
                    )}
                </div>

                {/* Generate button */}
                <button
                    id="generate-excel-btn"
                    onClick={handleGenerate}
                    disabled={loading || !isValid}
                    className={`escalas-btn ${loading ? "escalas-btn--loading" : ""}`}
                >
                    {loading ? (
                        <>
                            <span className="escalas-spinner" />
                            Gerando…
                        </>
                    ) : (
                        <>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Gerar Excel
                        </>
                    )}
                </button>

                {/* Feedback messages */}
                {error && (
                    <div className="escalas-alert escalas-alert--error">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                        {error}
                    </div>
                )}

                {success && (
                    <div className="escalas-alert escalas-alert--success">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        Download iniciado com sucesso!
                    </div>
                )}
            </div>
        </section>
    );
}