
#JSON Information

The important information from the JSON files holding each block's information will be given below. Hopefully it will be a helpful reference to save some effort in learning how to translate blocks in any future work.

##JSON reference

* Block ID- Random String of symbols and text ID for the block (ex. d)b5}!Q;Y=)Q7L:6@maQ)
  * fields: Have yet to be important to us.
  * inputs: These are the contents of the block that can be edited by users.
    * ex. NUM1, NUM2, MESSAGE, SECS, CONDITION, SUBSTACK, SUBSTACK2, TO, etc.
    * Each input has an array of data within it:
      * 0: This field holds the form that the input takes, 1 being user input, 2 being associated with if/then blocks, and 3 being blocks as inputs.
      * 1: if a block was input then this holds the ID of that block, otherwise, this will hold the contents of '2:' given below.
      * 2: This field holds an array itself which details the information for the value of an input
    * ignore the proto 
  * next: Holds the ID for the following block
  * opcode: Details which block this is (ex. motion_movesteps is the move x steps block in the set of motion blocks)
  * parent: Holds the ID for the previous block, or the block holding the current block
  * shadow: Boolean. Is true if the block is a certain kind of drop-down menu within another block. (ex. in the block play sound x until done, x is a block which has a true value for shadow)
  * topLevel: Boolean. Is true if the block is the starting block or "hat" block
  * x: The X coordinates of the block.
  * y: The Y coordinates of the block.
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
