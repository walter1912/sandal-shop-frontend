const textAreaStyles = {
    .input-sizer {
        display: inline-grid;
        vertical-align: top;
        align-items: center;
        position: relative;
        border: solid 1px;
        padding: .25em .5em;
        margin: 5px;
        
        &.stacked {
          padding: .5em;
          align-items: stretch;
          
          &::after,
          input,
          textarea {
            grid-area: 2 / 1;
          }
        }
        
        &::after,
        input,
        textarea {
          width: auto;
          min-width: 1em;
          grid-area: 1 / 2;
          font: inherit;
          padding: 0.25em;
          margin: 0;
          resize: none;
          background: none;
          appearance: none;
          border: none;
        }
        
        span {
          padding: 0.25em;
        }
        
        &::after {
          content: attr(data-value) ' ';
          visibility: hidden;
          white-space: pre-wrap;
        }
        
        &:focus-within {
          outline: solid 1px blue;
          box-shadow: 4px 4px 0px blue;
          
          > span { color: blue; }
          
          textarea:focus,
          input:focus {
            outline: none;
          }
        }
      }
      
      .input-sizer {
        box-shadow: 4px 4px 0px #000;
        > span {
          text-transform: uppercase;
          font-size: 0.8em;
          font-weight: bold;
          text-shadow: 2px 2px 0 rgba(0,0,0,.15);
        }
      }
}