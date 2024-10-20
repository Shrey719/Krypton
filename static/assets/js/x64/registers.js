let registers = {
        rax: {
            top: 0x0000000000000000,
            eax: {
                top: 0x00000000,
                ax: {
                    top:0x0000,
                    al: 0x00
                }
            }
        },
        rbx: {
            top: 0x0000000000000000,
            ebx: {
                top: 0x00000000,
                bx: {
                    top: 0x0000,
                    bl: 0x00
                }
            }            
        },
        rcx: {
            top: 0x0000000000000000,
            ecx: {
                top: 0x00000000,
                cx: {
                    top: 0x0000,
                    cl: 0x00
                }
            }
        },
        rdx: {
            top: 0x0000000000000000,
            edx: {
                top: 0x00000000,
                dx: {
                    top: 0x0000,
                    dl: 0x00
                }
            }
        },
        rsi: {
            top: 0x0000000000000000,
            esi: {
                top: 0x00000000,
                si: {
                    top: 0x0000,
                    sil: 0x00
                }
            }
        },
        rdi: {
            top: 0x0000000000000000,
            edi: {
                top: 0x00000000,
                di: {
                    top: 0x0000,
                    dil : 0x00
                }
            }
        },
        rbp: {
            top: 0x0000000000000000,
            ebp: {
                top: 0x00000000,
                dp: {
                    top: 0x0000,
                    bpl: 0x00
                }
            }

        },
        rsp: {
            top: 0x0000000000000000,
            esp: {
                top: 0x00000000,
                dx: {
                    top: 0x0000,
                    dl: 0x00
                }
            }
        },

    }

localStorage.setItem("registers", registers)