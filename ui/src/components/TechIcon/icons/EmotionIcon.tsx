/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { SVGStyles } from './styles';

const EmotionIcon = (): JSX.Element => (
    <svg css={SVGStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
        <path fill="#D26AC1" d="M467 612H342c-1-1 0-2 1-3a544 544 0 0 1 54-65l9-9c11-10 23-21 38-27l29-14a205 205 0 0 1 24-6l11 5 9 5 2 2h-5l-12-5 12 9c7 5 13 11 20 14l3 2-3 3c-12 9-23 19-33 30-12 12-21 26-27 42l-6 15-1 2z" />
        <path fill="#2A2B2A" d="M139 310a751 751 0 0 1-19-115c-1-25 2-50 12-74 8-18 20-32 35-45 6-5 13-11 20-14l7-2h3c1 1 0 2-1 2a134 134 0 0 0-54 49c-9 13-13 29-16 45-2 10-3 20-2 30l2 35 7 48c2 14 5 28 11 42l7 16 17 35c7 12 14 25 22 36l14 20 15 19c-7-11-14-24-19-37l-17-42c-6-16-13-32-18-49-2-6-2-13-3-19-2-20 2-40 5-59l8-19 13-28c2-5 2-9 1-14l-1-1c-2-8-2-16-1-24 1-1 1-3 3-2l1 2c-1 14 2 27 5 40a99 99 0 0 1 1 37l5-5 17-28c5-12 9-23 11-35 2-8 3-17 1-26l1-5c1-1 1 0 2 1l1 7v3c1 10 0 18-2 27-5 22-15 42-29 59l-3 4-6 7c-1 1-2 2-4 1v-4c3-7 4-16 3-24l-2-19v-1l-2 5-16 37-2 9c-2 8-4 16-4 24l-1 13v17l4-4a285 285 0 0 1 13-17c1-4 3-8 6-11l14-19 32-41c11-14 24-27 34-41l4-6c1-1 2-2 2 0 0 3-3 5-4 8-6 9-13 18-21 26l-16 21c-11 11-20 25-29 37l13-6 3-3 33-42 23-29 3-3c1-1 1-2 3-2 0 3-2 4-3 6-17 25-37 46-55 71 6-1 10 0 14 1 12 4 21 12 28 22 6 7 10 15 13 23 1 1 2 3 0 4-2 0-3-2-4-3l-6-12-7-12-2 11c-3 9-8 17-17 22-5 4-11 5-18 4l-7-1c-13-4-22-13-23-26-1-3 0-6 1-9l1-5c-5 9-13 17-18 26l-8 11-4 5-1 4 2 6 4-4 12-13 2-2 1 2c-2 6-6 10-10 14l-3 3h3l20-2 5 1c1 2 0 4-1 5l-11 23-4 8-2 6c-1 1-2 2-4 0-1-2 1-3 1-5l3-5 13-29-23 2c-5 0-5 0-3 5l8 29 1 3c4 5 5 12 8 18 2 4 3 9 7 13h4l4-5c5-3 8-7 12-12l14-14c5-7 12-13 18-19l19-19 6-5 17-18 27-25 2-1c1 2 0 2-1 3-5 7-11 13-17 18l-23 23-7 6-10 11-13 13-20 21-16 17-5 5-4 4c-2 2-2 3-1 4s2 2 1 3l-2 1c-3-1-3-4-5-6 2 2 3 4 3 7 0 1 0 2 2 3l7 17 1 4 17 30v4c-2 2-4 1-5 0l-11-13-10-13c-2-3-2-3-4-1l-25 16-9 7-37 30c21 1 43 6 63 15l31 16c14 7 25 17 37 27l11 9a128 128 0 0 1 32 48l4 10v2l-2-1-11-20c-4-10-10-18-17-26-11-13-25-23-38-34-11-8-23-14-35-20l-22-11c-13-5-26-8-40-10h-13l-6-1c-3-1-3-3-1-5l1-1c11-7 20-17 32-24l6-5c11-10 25-16 36-25 3-3 3-3 1-6l-6-7c-1-2-2-2-4-1l-15 13-25 21-3 3-11 12-12 11-18 18 6-1c11 0 22 0 33 2l29 6 30 13 19 11 25 19c20 16 36 35 49 58 3 5 6 11 10 15l1 2h-2l-7-8c-7-11-13-22-21-32l-23-24c-12-11-26-21-40-31l-19-10-3-1c-8-5-17-5-25-4l-36 6-20 4-19 5c-2 1-3 2-2 4l10 17c11 17 21 35 34 51l22 25c1 1 3 2 2 4h-5l-1-2-23-27-19-28-16-26-6-14c-1-1-1-2-3-1-3 0-2 2-1 3l7 16c7 16 16 30 25 44l14 17 13 17v1h-4l-2-2-19-23-7-10-20-34-10-25c-1-2-1-2-3-2-6 3-6 3-3 9l20 36c10 16 22 29 33 44l3 5 1 2H65v-3c2-9 6-18 9-25-4 7-10 15-13 23-1 2-2 4 1 4l1 1H52c5-11 12-21 19-31 3-6 7-12 12-17 1-1 4-2 4-4s-2-4-3-5l-17-30c-3-7-3-7 4-11l21-7c19-5 40-9 60-12l18-2-2-1c-20-7-41-10-63-8l-5 1c-3 0-4-1-3-4l3-4c7-7 13-14 21-20 7-6 13-14 19-21l1-1 7-7c9-6 16-13 24-20l11-8c2-2 2-2 0-5a363 363 0 0 1-35-67l-7-13-2-5z" />
        <path fill="#D26AC1" d="M154 612l-27-31-18-25c-6-12-14-22-20-33l-5-9c-1-2-1-2 1-3l21-5c7 1 14 1 21 5l33 13c18 6 35 15 51 25 10 7 21 13 30 21 13 12 26 25 35 40l1 2H154z" />
        <path fill="#9A5599" d="M277 612c-5-7-9-14-15-20l-15-15c-10-9-21-17-32-24l-33-20-32-12-23-9c-5-3-10-4-15-5l-6-1c18-4 37-9 56-10l9-1c4-1 8 1 12 3 19 6 34 18 50 30 22 16 41 37 55 60 4 7 8 13 14 18l-1-1c1-1 0-3 2-3 4 2 5 2 7-2 1-1 1-3 3-3v2c0 3 2 4 4 3l1 1 2-3 15-25c2-4 4-7 8-10l23-24c12-12 26-22 41-30l33-14 30-9 19-5 8 5-17 5c-12 4-24 10-35 15s-20 12-29 19l-17 17-8 7c-8 7-14 15-21 24l-27 35-1 2h-65z" />
        <path fill="#D26AC1" d="M485 612h-10v-2c7-20 17-37 31-52 12-12 25-23 38-33l3-1c2 1 5 1 6 3l-7 8c-14 12-27 24-38 39l-14 19-9 18v1z" />
        <path fill="#46CAE3" d="M138 612l-3-3c-3-6-8-11-12-17-17-18-29-39-39-62-2-4-5-9-6-14-1-1-1-2 1-3 1 0 3-3 4 1 6 16 16 29 25 44a320 320 0 0 0 41 54h-11z" />
        <path fill="#010101" d="M547 524c-8 5-14 11-21 17-9 7-18 16-26 25a132 132 0 0 0-25 46h-2v-3c6-19 16-35 29-50 13-14 27-26 42-37l5-3c1-1 3-1 2-3h-4l-6 4-1 1c-11 8-21 17-30 26a151 151 0 0 0-39 61l-3 4h-1c2-9 5-18 10-26 10-21 25-38 43-53l16-13c2-3 6-4 9-6a95 95 0 0 0-24-13l-3-1-21-12-8-4c-2-1-1-2 0-3a3269 3269 0 0 1 72 38c1 1 2 2 0 3h-2l-1-1c-5-2-4-3-8 1l-3 2z" />
        <path fill="#D26AC1" d="M127 612l-5-7-27-35-10-17-17-30c-2-4-2-4 3-6 5-3 5-3 7 3a249 249 0 0 0 47 80c4 3 7 8 9 12h-7z" />
        <path fill="#46CBE5" d="M545 523c-12 8-23 18-34 28-17 16-30 35-37 57l-1 4h-5l6-15c5-13 12-23 19-34 13-17 29-30 46-43l6 3z" />
        <path fill="#5F5F5E" d="M62 612c-1-1-4 1-4-1l2-5c4-9 9-17 15-26l-5 12a139 139 0 0 0-6 20h-2z" />
        <path fill="#7F807E" d="M485 612v-1l4-1h43l4 1v1h-51z" />
        <path fill="#B2B2B0" d="M536 612c1-2 2-1 4-1l18-1c2 0 4 0 6 2h-28z" />
        <path fill="#D26AC1" d="M219 189c-4 10-10 19-17 27v-2c-1-12 0-23-2-34l-3-15-5-17-2-5c-2 0-2 0-2 2-1 8 0 16 1 24l1 4c0 4-1 8-4 11-14 15-20 34-26 53-3 11-4 22-4 33 1 17 4 34 9 51 8 24 18 47 30 69l10 25c1 2 1 3-1 3l-14-19-16-25c-8-13-13-27-20-40-5-11-11-21-15-33-5-17-8-34-10-52-3-22-6-44-6-67a128 128 0 0 1 67-119l5-2 2-1 1-3 1 2c1 9 4 17 6 25 0 4 2 7 3 10l7 16 5 6 11 10 1 2c1 9 0 17-2 26l-1-4-2-16c0 21-7 41-16 61l5-5c1 0 2-2 3-1z" />
        <path fill="#2A2B2A" d="M494 484c-2-1-3-3-5-3l2-1c5-1 9-2 14-1l8-1c2 0 2-1 1-2l-12-12-22-19-13-10a239 239 0 0 0-55-34h-5a156 156 0 0 1-45 29c-2 1-2 2-2 5 0 12 1 24 7 35l7 8 1 3c1 1 1 2-2 3-4-2-6-6-8-9-8-12-10-25-9-39 0-3 0-3-2-2l-24 9c-8 3-17 3-26 2-13 0-26-4-37-10l-8-4-31-19c-3-1-5-3-7-6l1-2a405 405 0 0 0 61 34c17 4 34 5 52-2l28-11 27-16c10-6 18-15 26-23 10-11 18-22 24-35l11-26c2-5 1-10 1-15l-1-8c-3 15-8 29-15 43l-4 8-3 2c-2-1-2-2-2-4l1-17c-1-15 0-30-3-44l-2-13c-2 4-4 7-8 9-2 2-4 4-3 8v2l-2 2c-1 1-2 0-2-1l-2-4-3 2c-9 4-17 3-26-1-11-4-18-12-21-24l-2-8-5 8-7 13c-3 0-2-2-2-4l8-15 10-15c5-5 10-8 16-10l2-1c5-2 4-2 1-5-9-14-19-27-31-39l-3-4a143 143 0 0 1 12 45c0 2 0 3-2 4l-3-2-15-25c-2-3-2-3-4 0l-2 3-11 16c-7 9-12 19-18 29l12-3c7-2 14-5 22-6l2-1c3 0 4 2 3 5s-3 5-6 7l-17 18-9 9c-12 11-22 23-33 35l-43 49-13 13-6 6c-1 1-3 1-3-1s2-3 3-5l2-2 7-6 22-25 24-28 33-36 31-30 4-4-14 4-20 5-4 1c-3 0-4-2-3-4l1-2 13-19 19-27c5-7 5-5 0-12l-12-17-10-11a145 145 0 0 0-28-25l-33-21a96 96 0 0 1-30-30l-8-16-1-1 1-1h1l1 2a94 94 0 0 0 40 45l33 20c18 13 32 29 45 46l12 17 13 23c-1-20-17-60-41-82-1-2-3-3-1-5 1-2 3 1 4 2 9 9 17 19 23 30l7 9c16 15 30 32 42 51v1c9 14 15 28 22 44l-2-10c0-9-2-18-4-27a186 186 0 0 0-28-69l-10-15-1-2v-3l2 1 6 7 4 6 11 16 5 10 20 35c8 16 14 32 17 49a298 298 0 0 1 5 64c5-8 8-18 11-27s6-19 6-29c1-12 1-24-1-37l-1-4c-2-12-5-23-9-35-1-1-2-3 1-4 2 0 2 2 2 3l2 5 8 27c3 13 4 27 3 41-1 9 1 17 2 25l-1 9c0 12 0 24-5 36l11-15 7-8c2 0 2-2 3-3l1-3h1l3-6 3-4 4-7 1-2c1-1 3-3 3-5l1-1 2-4h1l1 1-3 7-1 1-10 17-1 1-6 9v6c4 17 12 34 21 49l18 26c1 1 3 2 2 4-2 2-4 1-5 1-8-2-15-4-21-8l-20-12c-3-2-3-1-3 1 0 5 1 10 3 14l11 23 4 6a283 283 0 0 1 37 34c2 4 1 5-3 6l-19 1-2 1z" />
        <path fill="#754177" d="M139 310l8 16c8 14 14 29 21 44l16 26v4c-9 5-16 12-23 18l-13 11c-3 1-5 5-7 6h-2l1-2-26 4-8 2-2 1-2-1 1-2 2-2 25-26c8-10 12-21 14-33 0-4-1-5-5-3l-27 11c-8 4-17 5-26 6l-2-1c-1-1 0-1 1-2l14-15c16-15 28-34 37-54l3-8z" />
        <path fill="#2C2C2C" d="M564 612h-28l-48-1h-3c2-8 6-16 11-23 10-13 19-26 31-37l26-24c1-3 4-4 6-6l2 1c0 2-2 4-4 5l-19 18c-2 1-2 2 0 4 13 13 22 28 27 45l2 13c0 2 0 4-3 5z" />
        <path fill="#262827" d="M489 304c-1-2 1-3 1-4l2-4c-2 1-2 4-4 4-1-1 0-2 1-4 6-11 9-24 10-37 3-24-2-46-11-68l-10-22-12-20-7-8c-1-1-2-1-1-3 1-1 2 0 3 1l12 11 9 7c5 4 8 10 12 15 9 11 20 21 31 31l16 14-2-3-11-25-4-9-14-30c-7-13-14-27-24-39l-7-7-23-24A311 311 0 0 0 317 9a586 586 0 0 0-50-4c-8 0-15 0-23 2-8 1-15 4-21 9-10 6-17 15-21 26-2 7-1 14 0 21l5 20-1 4-1-3c-3-9-6-18-7-27l1-13c2-11 8-19 15-26 10-10 23-14 36-16a254 254 0 0 1 146 31 297 297 0 0 1 99 85c8 11 15 23 20 36l30 64 1 1c0 1 1 2-1 3h-3l-12-10-35-34-16-19-5-6 15 32c9 20 15 41 14 63 0 19-4 37-13 54l-1 2z" />
        <path fill="#292A29" d="M139 310c-2 9-7 17-11 25-8 15-19 28-31 40l-13 14h8c12-2 22-6 33-11l15-6c4-2 5-1 5 4-2 13-7 25-16 36l-18 19-9 8 9-1 30-6h1l-1 2-1 1-37 7h-2c-1 0-3 0-3-2-1-1 1-2 2-3 11-9 20-19 29-30 8-9 11-19 13-30v-3l-3 1c-13 6-26 13-41 15l-14 2-3-1c-1-2 0-3 1-4l23-24c14-15 24-32 33-50l1-3z" />
        <path fill="#262827" d="M478 322c0-3 2-5 3-7l6-9 1-1-10 17zM472 332c1-4 2-7 6-9l-6 9z" />
        <path fill="#28292A" d="M431 596l4-13 6-21c1-4 1-4-3-5l-9-4c-2 0-2-1-2-3l6-13 13-21 6-6 2-1 1 3-5 17-3 12 1 3 9 3c5 1 6 4 4 8l-23 37-6 5-1-1z" />
        <path fill="#DC8CCE" d="M519 500c9 3 19 8 28 14-4 1-7 4-10 6l-4-3c-9-3-15-10-22-15l-9-7-2-1h2a317 317 0 0 1 17 6z" />
        <path fill="#B91D91" d="M328 213l-19 26-13 21c-1 1-2 2-1 3 1 2 2 1 3 1l20-6h3l-1 1-2 2-22 20-17 17-43 43-28 29-2 2c-2 1-2 0-3-1l-4-5-10-22c-1-2-2-3-1-4 4-10 8-20 14-30 1-2 2-3 1-5-1-3-3-1-5-1l-24 2c6-6 12-11 15-18 2-1 3 0 4 1 10 5 21 9 33 11 10 1 20 0 30-5l15-7c4-1 6-4 10-4v-4c-5-10-10-21-18-30-9-9-18-15-30-16h-8l2-3c17-22 36-44 52-67l1-2 8 6 11 10c11 9 19 21 28 32l1 3z" />
        <path fill="#9A5599" d="M205 84l2 3-5-20c-1-8-3-16-1-24l1-1c2-1 3 0 4 2 5 5 9 11 13 18 6 12 16 20 28 27 7 6 16 9 25 13 8 4 16 7 23 12 14 8 27 17 37 29l6 7a270 270 0 0 1 47 84c1 1 2 2 0 4l-11-15c-9-14-20-26-32-38-4-3-7-8-9-13l-20-25c-1-1-2-3-4-2-1 1 0 3 2 4-2 1-3 0-4-1l-4-2c7 10 15 20 21 31 5 10 10 19 13 29 1 1 2 2 1 3l-18-24c-17-22-37-39-61-52-11-6-22-13-31-23-8-8-15-17-20-28l-1-2-1-1c4 10 9 19 15 27l10 11c1 2 2 4 1 6v5c-6-5-13-10-16-17-5-7-9-15-11-24v-3z" />
        <path fill="#3A96B0" d="M221 406c11 9 24 16 35 22l3 2v22c-1 7-4 14-8 19l-3 3-1 4c-2 1 0 2 0 3l15 26 27 50 15 33c1 1 2 3 4 3l1 1v2l2-2 1 2-1 4c-1 1 0 3-3 4-2 1-4 0-5-2-2-1-2-2-1-3l1 1c-1-5-4-9-6-14-7-17-17-32-30-45l-10-14-10-16c-7-12-15-24-24-35a82 82 0 0 0-37-25l-22-7-2-2 9-6c9-5 17-11 26-18 2-1 2-1 4 1 6 9 12 18 20 25 1 2 3 5 5 3s0-4-1-5l-16-29 2-3 9-4h1z" />
        <path fill="#46C9E3" d="M163 443l26 8c16 6 29 17 40 31 10 13 18 27 27 42l10 15c1 0 2 1 1 2-15-13-30-26-47-36l-36-18c-20-8-40-13-61-13h-1l41-31z" />
        <path fill="#FEC92C" d="M201 224l13-20c12-20 19-41 21-64v-8h1c4 7 11 9 18 13l14 9 2 2-18 23c-14 16-28 32-41 50l-13 19c-3 6-9 10-12 16-3 8-10 14-15 21l-1-3a257 257 0 0 1 4-48l11-24c0-1 1-2 2-1l1 1v23l1 3 2-2 10-10z" />
        <path fill="#D36AC2" d="M302 599l1 3c-2 0 0 3-2 3-4-4-6-9-9-14-17-29-40-53-67-72-9-6-17-13-27-17l-21-9c-22-9-45-13-69-12l-9 1c12-16 29-27 42-43 5-1 10 0 15 1l2 2-20 16-19 14-2 3 3 1 4 1c12-2 23 2 35 4 18 4 33 13 49 21 21 10 39 24 56 40 12 10 22 23 28 38l10 19z" />
        <path fill="#46C9E3" d="M320 259l1-1c5-3 10-3 16-5l-5 6c-27 26-51 52-75 79-12 13-22 27-34 39l-8 7v1c-3-1-7-6-7-9 13-15 26-30 40-43l20-20 38-38 14-16z" />
        <path fill="#9A5599" d="M204 418c1 0 2-1 1-2-4-7-5-14-8-20a328 328 0 0 1-39-99l-2-21-1-17c0-8 3-17 5-25 4-14 9-27 17-40l8-9c4-5 4-9 4-14v-2l2 9v2c-8 16-16 32-22 48-3 8-3 17-4 25a146 146 0 0 0 8 77l33 81c3 9 8 17 13 25l2 4c-7-7-12-14-17-22z" />
        <path fill="#F7F7F4" d="M272 289c-9 3-17 9-26 11-12 2-23 1-34-3-7-2-14-4-20-8l-3-1c-1-1 0-2-2-2-4-1-6-4-7-7l20-29v1l-2 7c-4 15 7 29 18 33 21 7 36-2 44-20l1-3h1c3 4 6 9 7 14l3 7z" />
        <path fill="#46C9E3" d="M279 162l-37 46-20 25-3 3-15 8 2-4c16-22 34-44 52-65l14-18c2 0 6 3 7 5z" />
        <path fill="#9A5599" d="M158 442c-4-2-9-3-14-2l-3-1 29-25 15-12c2-1 3-1 4 1l7 10v3l-25 17c-5 2-9 6-13 9z" />
        <path fill="#B0782A" d="M251 262v-9h1l7 11c-1 12-15 28-30 26-7 0-14-2-20-7-9-8-11-18-7-29 2-7 6-10 12-13-4 8-6 15-6 22 0 16 11 25 27 20 6-1 10-5 13-11l1-1 2 1c2-1 4-2 4-4l-2-4-2-1v-1z" />
        <path fill="#892078" d="M328 213a240 240 0 0 0-48-51c1-2 3-3 3-5l2-4c10 7 18 16 26 25l20 26v5l-3 4z" />
        <path fill="#B99632" d="M270 156l-29-17c-3-1-4-4-6-7l-1 2a433 433 0 0 1-2-11c0-2-2-4-1-6 9 7 18 13 28 18l18 12c1 2 0 3-2 4v-2c-2 2-2 5-5 7z" />
        <path fill="#B08B1E" d="M201 224c-1 3-4 4-6 7l-4 5h-2l-2-2v-6-20l-12 25c-1 1-2 2-4 1 4-16 11-30 17-44l2-2c1-1 0-4 2-4 3 12 5 25 2 37l-3 7v3c2 1 3 0 4-1l6-6z" />
        <path fill="#9A5599" d="M190 143c1 0 2 0 3 2l7 30c2 5 2 11 2 17v24l-5 8a103 103 0 0 0-2-44c-4-12-5-25-5-37z" />
        <path fill="#FEC92C" d="M176 309l25-3-15 30-2-2a177 177 0 0 1-8-25z" />
        <path fill="#DC8DCE" d="M219 189l-6 6c-1 0-1 2-3 2 9-21 16-43 17-66 2 8 3 15 3 23-1 12-5 24-11 35z" />
        <path fill="#891F76" d="M188 340c3 9 8 17 12 25 1 3 3 6 6 8l-6 5h-3c-2-3-5-6-6-10l-6-16c-1-2-3-3-3-5v-1c2 1 3 0 3-1l3-5z" />
        <path fill="#B4B6BC" d="M272 289l-4-8c0-3-2-5-3-8l-4-5 2-13 9 14 6 11c0 2 1 3 3 4l-9 5z" />
        <path fill="#B99632" d="M171 234l4-1-3 23-1 26 1 3-5 7c-1-8-2-15-1-22l1-15c0-7 2-14 4-21z" />
        <path fill="#B99630" d="M182 346v1l-9-29-3-7c-1-2 0-3 2-2h4l9 24 1 3-4 10z" />
        <path fill="#F7F7F4" d="M225 250c4 0 7 4 7 8s-3 7-7 7-8-4-8-8c0-3 4-7 8-7z" />
        <path fill="#46C9E3" d="M180 279c2 2 4 5 8 7-4 6-9 10-14 15-1-4-3-8-2-11l8-11z" />
        <path fill="#9A5599" d="M208 409l-7-17c1-2 3-3 5-1l11 11v2c-3 2-5 5-9 5z" />
        <path fill="#0F0E0E" d="M208 409l8-5c1 0 2-1 0-2l-11-11c-2-2-3 0-4 1-3 0-2-2-2-3l3-2h2l2 2 3 1c1 2 1 3 3 1l5-5h1v2l-4 4c-3 3-3 3 0 5l7 5 1 2-1 2-9 4c-2 1-3 1-3 3-2-1-1-2-1-4z" />
        <path fill="#825E31" d="M259 264l-7-10-1-1-5-12 13 9c2 2 1 4 1 6l-1 8z" />
        <path fill="#3A96B0" d="M275 151l2-4 8 6-1 4-5 5-8-5 4-6zM210 391h-3l-3-4c-4-5-4-5 1-9l3-2c1 3 4 6 7 8l-5 7zM172 290c0 4 1 7 3 11l-6 5c-3-6-1-12 3-16z" />
        <path fill="#605F5F" d="M249 272h-1c-3-5-3-8 3-10v1c1 3 0 6-2 9z" />
        <path fill="#606060" d="M221 280l-2 1-5-6v-2l2 1 5 5v1z" />
        <path fill="#734075" d="M202 387l-2 2-4-9 6 7z" />
        <path fill="#945786" d="M193 184l-3 4 1-4c1-2 1 0 2 0z" />
        <path fill="#D26AC1" d="M433 412c12 6 24 14 34 23h-3l-4-2c13 15 31 24 46 38l-3-5c-1-1-2-2-1-3l13 13 1 3h-3c-8 0-16 0-24 2l-17 4c-14 5-28 8-42 14a217 217 0 0 0-73 50l-15 15c-4 4-8 8-10 14-4 8-10 15-14 24l-1 1c-4 1-4 1-4-4l-1-2c-1-2 0-3 1-4 5-11 11-21 19-30l20-23a173 173 0 0 1 78-52l33-11 12-3c5-2 6-4 2-8l-17-14-41-27-3-2c0-2 1-2 3-3l11-8h3z" />
        <path fill="#292927" d="M417 423l44 29c6 3 11 8 15 12l4 4c1 3 0 5-3 6l-46 15c-33 11-62 30-84 57-6 9-13 16-20 24-5 7-10 15-13 23l-2 4-1 3v-4c1-7 4-12 6-17 4-7 9-12 14-18l19-23 13-13c10-10 22-18 35-25 15-9 31-14 48-20l18-6 10-3c3 0 3-1 1-3l-11-10-25-17-24-15-19-9c-1-1-4-2-3-5h4a198 198 0 0 1 20 11z" />
        <path fill="#282A28" d="M317 603c4-10 10-18 15-27 2-5 5-9 10-13l24-24c16-16 36-28 57-37 20-10 41-15 62-20l4-1v3c-15 2-29 7-44 12-26 8-50 21-72 40-8 6-14 15-21 21-10 8-17 18-23 29-3 7-8 12-12 20v-3z" />
        <path fill="#DC8CCE" d="M559 521c-1 3-4 4-6 6-2-1-5-1-6-3l3-3c4-3 4-3 8 0h1z" />
        <path fill="#71D5E7" d="M545 523l-6-3 7-5 2-1 5 3-8 6z" />
        <path fill="#D26AC1" d="M385 238c0-5-3-9-4-14a267 267 0 0 0-50-82c-11-11-23-19-36-27-12-8-24-13-36-18-10-5-19-11-27-18-7-6-12-13-16-21l-11-15-3-1c1-7 5-12 9-17 10-12 24-18 39-20l33-1h2l-4 1c15 0 29 4 44 8 14 4 28 8 41 14 8 2 14 7 21 10a814 814 0 0 1 80 62c10 9 18 19 25 30 10 14 20 29 28 44l4 7 15 32 1 2h-2c-13-13-26-26-37-40-7-10-17-18-28-23l-12-11c-1-1-2-3-3-1-1 1 1 1 1 2 3 2 6 4 7 7-1 1-2 0-2-1l-14-10-10-7 8 11c13 17 22 36 30 56 5 13 8 25 9 39l1 24c0 10-2 21-5 31l-9 30-1 4-2 3-2 3-7 8v-3l3-24v-19l-1-22c-1-12-5-23-9-33l-12-22-4-8a167 167 0 0 0-16-38l-5-8-14-16c8 17 19 33 26 50 8 20 12 40 15 60l1 8v1s1 0 0 0l1-14 1-4c2 7 2 13 2 20 1 17 0 34-6 51-2-1-1-2-1-3 1-8 0-16-2-24-3-8-4-17-6-25-3-12-8-23-14-34a271 271 0 0 0-42-55l-5-7-9-12c-1 0-1-2-3-1-1 1 1 2 1 2 7 10 14 20 19 30l7 13c-2 2-2 0-2-1l-4-8a447 447 0 0 1 24 91c-6-16-13-31-22-46z" />
        <path fill="#FEC92C" d="M217 387l1-1c32-35 62-73 97-106l20-20 3-4c1-1 2-2 1-4l-4-1-11 3-26 7 30-46c3 0 3 2 4 3l8 15 4 9c2-2 3-5 6-6 1 1 1 3 3 2 2 0 2-2 2-3l-5-24-1-3c0-3 2-2 2-1 3 3 6 5 8 9l14 20c1 1 2 2 1 3l-3 2c-7 2-11 7-15 12l-15 27v2c0 5 3 7 7 9a65 65 0 0 0 57 6h3l2 1c2 0 2 2 2 3a191 191 0 0 1 5 49c-1 15-5 30-13 43l-13 17c-14 10-30 18-46 24l-14 5c-10 3-20 3-30 3-7-1-13-1-19-4l-43-31c-7-5-14-10-20-17-1 0-2-1-2-3z" />
        <path fill="#B99632" d="M308 594v-1c-2-3-4-6-4-9l5-15c1-6 4-12 7-17l13-25 14-25c3-4 4-8 3-13-1-8-1-17-4-25-1-4-1-4-4-3l-15 5c-7 1-14 0-21-2-11-2-21-5-29-11h-2l-3 11c-3 7-7 14-12 20l-4 3c-3-2-5-5-6-8 0-2 0-4 2-5l4-2c4-6 7-12 8-20 1-7-1-14-1-21v-1l20 10c19 6 38 8 57 0l21-8v9c-1 14 3 26 12 38l5 5v1a817 817 0 0 0-43 67l-11 17-10 22c0 1 0 2-2 3z" />
        <path fill="#754177" d="M451 334c-1 12-5 22-10 32l-1 2v2a706 706 0 0 0 25-30l5-5c5 30 21 56 40 81-4 0-7-2-10-3-9-3-17-8-24-12l-9-6c-4-2-6-1-6 3-1 6 1 11 3 17l9 20-2-1a2037 2037 0 0 1-24-17l-5-4c-9-5-17-10-27-13l-2-2c-2 0-2-1-1-2l13-14a149 149 0 0 0 26-48z" />
        <path fill="#3A96B0" d="M373 485l1-2c3 0 1-2 0-3-4-4-7-9-9-14-3-6-5-12-5-18l-1-15 1-3a203 203 0 0 0 34-18c-1 3 2 3 3 4l18 9c-7 5-10 12-13 19-2 9-6 18-10 26-5 8-8 16-12 25-5 10-10 20-17 30-12 11-22 25-33 38-4 5-9 10-12 16h-1l2-6 13-20c11-21 24-40 36-61l5-7z" />
        <path fill="#DC8CCE" d="M473 325c-1-3 1-7 2-10l8-29c4-11 4-23 4-35l-4-37-8-23-8-17c-5-12-12-22-20-32l-8-12-1-2 2 1c6 7 14 9 21 14l5 5c13 20 24 41 30 64 7 27 7 54-4 80l-4 8v1l-4 6v1l-5 8-2 3-4 6z" />
        <path fill="#B99632" d="M391 410l6-9c8-11 14-22 17-35 2-13 3-25 2-38l-4-27c0-1 0-3-2-3l2-3 1-1 11-4 2-1c2 12 3 25 3 37l-1 26 1 2c1 1 2 0 2-1a154 154 0 0 0 20-53l1 1 1 21-5 12a149 149 0 0 1-43 65l-14 11z" />
        <path fill="#9A5599" d="M374 170l15 15c9 10 17 21 24 33 4 4 6 9 9 14 10 16 14 35 18 53l3 11c1 7 2 13 0 20l1 2c-3 10-7 19-13 29 0-27 0-54-7-80-4-16-12-31-20-45l-20-35-9-15-1-2zM443 216l5 8c6 9 10 19 13 29 2 6 3 11 3 17l3 35-2 15-3 18v1l-6 9-7 8 4-14c2-7 1-15 2-22 0-9 0-18-2-27-1-4 0-7 1-10 0-22-3-43-10-64l-1-3z" />
        <path fill="#F7F7F4" d="M405 297c-16 6-33 6-49-1-4-2-9-4-12-7-3-2-4-4-2-7 4-7 7-15 13-22l2 11c4 15 14 22 28 25 6 1 12 0 18-2 2 0 3 2 2 3z" />
        <path fill="#D26AC1" d="M338 209l-4-10-19-35-15-20c5 1 7 4 11 5l19 23c9 15 16 30 20 47l2 14-14-24z" />
        <path fill="#DC8CCE" d="M448 247c-1 6 0 13-2 19-3-22-7-43-15-64-7-20-19-38-29-58h1l9 9c7 8 13 17 17 27l10 25v3c-2 0-1 2 0 3 3 10 7 21 9 33v3z" />
        <path fill="#AF782A" d="M402 291c-13 7-30 0-37-9-4-6-7-14-8-22 0-2 0-4 2-6l10-8-1 17c0 13 11 22 24 22l7-2c2 3 4 5 3 8z" />
        <path fill="#B99632" d="M217 387c5 6 11 11 18 16l45 32 2 3c-7-2-13-6-20-10-14-7-27-15-40-24l-9-7c-2-1-3-2-1-4l5-6z" />
        <path fill="#9A5599" d="M394 412h-1l15-12h3l22 11-10 7-6 5-19-9-4-2z" />
        <path fill="#B99732" d="M375 239l-2-3c-7-10-13-20-22-28 0 0-1-2-2 0l-7-20c6 5 34 39 39 49l-6 2z" />
        <path fill="#DC8DCE" d="M502 463l4 6 1 4-12-11a730 730 0 0 1-38-31c4 0 7 4 10 4 13 9 25 18 35 28z" />
        <path fill="#B99632" d="M350 236l-4 6c-1 2-2 1-3 0l-9-20-6-7c5-7 5-7 9 0l13 21z" />
        <path fill="#9B559A" d="M407 272c-3-5-4-11-5-17-4-17-9-33-15-49l-5-14v-1-1l5 11c1 1 1 2 2 1l9 25c4 14 7 28 8 42l1 3z" />
        <path fill="#825E31" d="M418 260v-4l5 15-1 2c-2 5-6 9-11 13l-1-10 1-2c2-1 3-3 3-5h1c5-2 6-4 3-8v-1z" />
        <path fill="#B4B6BC" d="M426 290l-14 6c-2-5-1-8 3-10s6-6 9-10l2 14z" />
        <path fill="#F7F7F4" d="M389 264c-2 3-6 3-9 2-2-1-3-5-3-8s2-5 6-6l6 12z" />
        <path fill="#B99632" d="M399 216l11 20h-1c-6 0-8-3-9-8l-2-11v-2l1 1z" />
        <path fill="#606060" d="M418 260c1 4-1 7-3 9h-1c-2-1-4-2-4-5 0-2 1-3 3-4h5z" />
        <path fill="#825E31" d="M402 291c0-3-2-5-3-8 4-2 4-2 6 1 2 5 2 6-3 7z" />
        <path fill="#B4B6BC" d="M389 264l-6-12c2 0 5 3 7 7 1 2 1 4-1 5z" />
        <path fill="#5F5F5F" d="M381 279l-2 1-6-5v-2h2l6 5v1z" />
        <path fill="#B5B7BB" d="M405 297c0-1 0-2-2-3l4-2c1 2 2 3 1 5h-3z" />
        <path fill="#A58A83" d="M399 216l-1 1-3-8 4 7z" />
        <path fill="#262827" d="M479 316l5-8v1c-2 2-2 5-5 7zM473 325l4-6c-1 3-1 5-4 6zM484 307l4-6c0 3-2 4-4 6zM469 331l2-3c1 2 0 3-2 3z" />
        <path fill="#5F5F5E" d="M559 608c-6-23-5-28-14-45 4 3 7 8 9 12 5 9 9 18 10 28 0 2 0 3-2 3l-3 2z" />
        <path fill="#DC8DCE" d="M525 180c-2 0-2-1-2-2l-17-27c-7-11-14-23-23-33-8-10-17-20-27-27l-11-10-25-21c-15-12-32-22-50-31-7-4-16-6-24-9L307 9c-9-2-18-5-28-5h6l30 4c50 8 92 31 130 62 18 14 34 31 48 49 9 11 14 24 20 37l12 24z" />
        <path fill="#9B559A" d="M473 151c6 1 11 5 15 8 9 7 15 16 22 24s14 17 23 24l6 6 1 1 2 4v1l-12-11c-10-8-19-16-28-26l-11-13c-4-6-9-10-14-15l-4-3z" />
        <path fill="#FEF529" d="M451 514c0 4-1 8-3 11l-4 17c-1 2 1 3 2 3l9 4 3 1c2 1 2 2 1 4-8 10-14 21-21 32l-4 4 4-12 6-15 1-3c0-4-2-6-5-6l-8-3c-2-1-2-1-2-3l6-11 12-19 3-4z" />
        <path fill="#29292A" d="M246 478l6 8 4 6 44 79 4 10v3c1 3 4 6 4 9-2 1-3-1-3-2-4-6-6-13-9-19l-26-48-25-45v-2l1 1z" />
        <path fill="#2A292A" d="M373 485c-14 24-29 47-42 71l-14 22-6 16-1 1c0 1 0 2-2 2v-3c4-14 12-25 19-37l37-61 8-10 1-1z" />
        <path fill="#2B2B2B" d="M259 431c3 14 4 28-6 40l-3 4-2-1 6-9c4-7 5-14 5-21v-13z" />
        <path fill="#367282" d="M311 594l6-15h1l-7 16v-1z" />
        <path fill="#C1985F" d="M249 272l2-10c3 1 4 2 5 5l-2 4c-2 2-3 2-5 1z" />
        <path fill="#46C9E3" d="M363 525l5-9 19-38 8-17c3-4 4-8 5-12 2-6 4-14 9-19 2-2 3-5 6-5 12 6 22 14 33 21l26 19c1 2 4 3 3 5 0 2-3 2-5 2l-30 10c-18 6-35 13-51 22-10 6-19 14-28 21z" />
        <path fill="#DC8CCE" d="M387 217c-11-25-25-48-37-72 12 11 36 56 37 72z" />
        <path fill="#A03125" d="M349 384c0 2-2 2-3 4-2 1-3 3-5 3l-11 5c-4 2-8 5-13 6-12 0-23-3-34-6l-5-1-11-8h-2c-2-4 2-3 3-4 3-2 6-1 8-2l21-1 10 1c4 1 8 0 12-1 8-1 15 1 22 2l8 2z" />
        <path fill="#BB9832" d="M341 391l5-3c0 2-2 2-3 3l-19 11c-4 2-7 2-11 2-8 0-17 1-25-1-7-2-12-6-17-10-1-1-3-2-2-3s2 0 3 1c11 7 22 10 35 12 10 1 18-3 26-8l8-4z" />
        <path fill="#B66158" d="M349 384l-7-1c-9-2-18-3-27-1l-10-1h-22l-7 1 1-1 17-4 11 2h8l5-1c6-1 12 1 17 2l10 1 4 3z" />
        <path fill="#550802" d="M341 391c-7 4-14 9-22 12-5 2-10 0-15 0-13-1-25-6-35-13l-3-4 4 2 8 6a82 82 0 0 0 39 7c8-2 14-6 21-10h3z" />
        <path fill="#27282C" d="M329 336c1 5 0 8-4 11-11 7-24 9-34-4-1-1-2-2-1-3 1-2 2 0 3 1l4 4c8 7 23 5 29-2 2-2 2-4 3-7z" />
        <path fill="#FBD55C" d="M313 380c-4 1-7 0-11-1l-10-1-16 4-8 1h-2l2-1v-1c8 1 14-3 22-4l14 1 9 1v1z" />
        <path fill="#FDD55D" d="M323 334c0 7-1 9-6 11l-3 1-2-1 1-2 6-6c1-1 1-3 4-3z" />
        <path fill="#FCD65D" d="M313 380v-1l12-2 23 4c1 1 2 1 1 3-8-4-16-4-24-5h-8l-4 1z" />
        <path fill="#FEC92C" d="M304 584c-14-34-33-65-52-96v-2c7-6 12-13 15-22 1-4 3-8 3-13 1-2 2-1 2 0 6 4 12 7 19 9l22 5c9 1 18-2 26-5 3-1 3-1 4 2 3 9 3 20 4 30 1 3 0 6-2 9l-19 33c-5 11-12 21-16 32l-5 16-1 2z" />
        <path fill="#A08463" d="M415 269l3-9c2 2 3 3 2 5-1 3-2 4-5 4z" />
        <path fill="#5A0D07" d="M341 386c-4 3-9 4-13 5h-30c-5 0-10 0-16-2l-8-2 5-1 15 4h20c9 1 18-1 27-4z" />
        <path fill="#792D2C" d="M317 401c-5 2-10 1-15 0-8-1-15-2-22-5l-2-2 29 7h10z" />
        <path fill="#B66258" d="M306 395h14c-4 3-10 3-14 0zM324 386c-2 0-4 1-4-1s2-2 4-2h4l2 1-2 1-4 1z" />
    </svg>
);

export default EmotionIcon;