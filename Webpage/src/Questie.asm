.model small
.stack 512

.data
tab_proc dw proc_1
          dw proc_2
          dw proc_3

tab_procf dd procf_1
           dd procf_2
           dd procf_3

intra dw etich1
      dw etich2
      dw etich3

inter dd etif1
      dd etif2

.code
; ----- Near procedures -----
proc_1 proc
    push dx
    pop dx
    ret
proc_1 endp

proc_2 proc
    push dx
    pop dx
    ret
proc_2 endp

proc_3 proc
    push dx
    pop dx
    ret
proc_3 endp

; ----- Far procedures -----
procf_1 proc far
    push dx
    pop dx
    retf
procf_1 endp

procf_2 proc far
    push dx
    pop dx
    retf
procf_2 endp

procf_3 proc far
    push dx
    pop dx
    retf
procf_3 endp

; ----- Labels (examples) -----
etich1:
    nop
etich2:
    nop
etich3:
    nop

etif1:
    nop
etif2:
    nop

end
