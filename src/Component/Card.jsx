import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const Card = (props) => {
  const { add, Delete, Edit,setAdd } = props;
 
  const [data,setData]= useState(add);
  const handleEnd = (res)=>{
   if(!res.destination) return;
   const items = Array.from(add)
   const [reorderData] = items.splice(res.source.index,1);
   items.splice(res.destination.index,0,reorderData);
   setAdd(items);
  }
  return (
    <>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
             <div
              className="row"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {Array.isArray(add) &&
                add.map((res, index) => {
                  return (
                    <Draggable
                      key={res.id}
                      draggableId={res.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="col-lg-4 col-md-6 col-sm-12"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                            <div className="card-body">
                              <h4 className="card-title">User Details</h4>
                              <hr/>
                              <div> Name:- {res.Name}</div>
                              <div> Email:- {res.Email}</div>
                              <div> Subject:- {res.Subject}</div>
                              <div> Message:- {res.Message}.</div>
                              <hr/>
                              <div>
                                <button
                                  className="edit_btn_panel"
                                  onClick={() => Edit(res.id)}
                                >
                                  <i
                                    className="fa fa-pencil-square"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                                <button
                                  className="remove_btn_panel"
                                  onClick={() => Delete(res.id)}
                                >
                                  <i
                                    className="fa fa-trash"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder} 
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default Card;
