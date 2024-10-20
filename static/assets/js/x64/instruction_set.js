reg = {
    rax: 0, // a extended
    rbx: 0, // b extended
    rcx: 0, // c extended 
    rdx: 0, // d extended
    rbp: 0x0000, // Start of stack
    rsi: 0xFFFF, // Stack pointer
    rdi: 0, // data copy area thing idk i dont fully understand it
    r8: 0, // evreything down from here are just misc registers (including this one)
    r9: 0,
    r10: 0,
    r11: 0,
    r12: 0,
    r13: 0,
    r14: 0,
    r15: 0,
    hflag: 0x0000, // kinda self explanatory, flags
    eflags: 0x0000, // second half of flags
    rflages: 0x00000000,
    flags: -1, // SCUFFED I KNOW, ITS FUNCTION RETURN FLAGS (0, 1 or -1 are the only valid flags)
}
x64 = {
    stack: []
}
let instructions = {
    mov: function(Source, dest) {
        dest = Source
        return
    },
    push : function(source) {
        reg.rsi =+ 1
        x64.stack.push(source)
        return
    },
    pop: function() {
        x64.stack.pop()
        reg.rsi =- 1
        return
    },
    inc: function(dest) {
        dest =+ 1
        flags = dest
        return
    },
    dec: function(dest) {
        dest =- 1
        flags = dest
        return
    },
    neg: function(dest) {
        dest = -dest
        flags = dest
        return
    },
    not: function(dest) {
        dest = ~dest
        flags = dest
        return
    },
    laeq: function(s, d) {
        d = s
        flags = d
        return
    },
    add: function(s, d) {
        d = s + d
        flags = d
        return
    },
    sub: function(s, d) {
        d = d - s
        flags = d
    },
    imul: function(s, d) {
        d = s * d
        flags = d
        return
    },
    xor: function(s, d) {
        d = d ^ s
        flags = d
        return
    },
    or: function(s, d) {
        d = d | s
        flags = d
        return
    },
    and: function(s, d) {
        d = d & s
        flags = d
    },
    cmp: function(s2, s1) {
        reg.hflags = s1-s2
    },
    test: function(s, d) {
      reg.eflags = s & d
    },
    jmp: function(l) {
        l()
    },
    je: function(l) {
        if (flags === 0) {
            l() 
        }
    },
    jne: function(l) {
        if (flags === 1) {
            l()
        }
    }
}



// Instuctions written out - 
/*
MOV - 0x10 
PUSH - 0x11
POP - 0x12
INC - 0x13
DEC - 0x14
NEG - 0x15
NOT - 0x16
LAEQ - 0x17
ADD - 0x18 
SUB - 0x19
IMUL - 0x1A
XOR - 0x1B 
OR - 0x1C
AND - 0x1D 
CMP - 0x1F
TEST - 0x20
JMP - 0x21
JE - 0x22
JNE - 0x23
*/